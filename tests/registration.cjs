const ts = require('typescript');
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
function load(file, imports = {}) {
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const context = { exports: {}, require: key => imports[key], process, fetch: (...args) => global.fetch(...args), AbortSignal };
  vm.runInNewContext(output, context); return context.exports;
}
const lib = load('lib/registration.ts');
const handler = load('pages/api/registration.ts', { '../../lib/registration': lib }).default;
const body = { name:'Test Student', email:'test@example.com', phone:'+60123456789', course:'surya-kriya', preference:'', consent:true, language:'zh', experience:'new', location:'kl-pj', requestId:'12345678-1234-1234-1234-123456789012', website:'' };
async function call(overrides={}) {
  const req = { method:'POST', headers:{origin:'https://www.yogasri.org','content-type':'application/json'},body,...overrides };
  const res = { code:200, setHeader(){},status(n){this.code=n;return this},json(data){this.data=data;return this} };
  await handler(req,res);return res;
}
(async()=>{
  process.env.REGISTRATION_SITE_ORIGIN='https://www.yogasri.org';
  delete process.env.REGISTRATION_WEBHOOK_URL; delete process.env.REGISTRATION_WEBHOOK_TOKEN;
  assert.equal((await call()).code,503);
  assert.equal((await call({method:'GET'})).code,405);
  assert.equal((await call({headers:{origin:'https://attacker.example'}})).code,403);
  for(const patch of [{course:'fake'},{consent:false},{email:'bad'},{name:'x'.repeat(101)},{website:'spam'},{requestId:'bad'},{preference:'x'.repeat(301)},{location:'unknown'}]) {
    assert.equal((await call({body:{...body,...patch}})).code,400);
  }
  process.env.REGISTRATION_WEBHOOK_URL='https://receiver.example/submit';process.env.REGISTRATION_WEBHOOK_TOKEN='test-token';
  global.fetch = async(url,opts)=>{assert.equal(opts.headers['Idempotency-Key'],body.requestId);assert.equal(opts.headers.Authorization,'Bearer test-token');return {ok:true,json:async()=>({persisted:true,requestId:body.requestId})}};
  assert.equal((await call()).data.reference,body.requestId);
  assert.equal((await call()).data.reference,body.requestId);
  global.fetch=async()=>({ok:true,json:async()=>({persisted:false})});assert.equal((await call()).code,502);
  global.fetch=async()=>({ok:true,json:async()=>({persisted:true,requestId:'wrong'})});assert.equal((await call()).code,502);
  global.fetch=async()=>{throw Error('timeout')};assert.equal((await call()).code,502);
  console.log('Passed: validation, origin, fail-closed configuration, confirmed receipt, stable retry ID, upstream errors.');
})().catch(e=>{console.error(e);process.exitCode=1});
