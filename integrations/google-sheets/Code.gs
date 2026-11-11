/** Website receiver. Never publish the spreadsheet itself. */
const TAB = '报名名單';
const HEADERS = ['申請編號','提交時間（馬來西亞）','姓名','Email','電話','課程','地點偏好','學習經驗','偏好日期或時段','語言','報名狀態','付款狀態','跟進備註','已同意資料使用','同意條款版本'];
const COURSE = {'beginner':'哈他瑜伽入門','surya-shakti':'Surya Shakti','surya-kriya':'Surya Kriya','yogasanas':'Yogasanas','angamardana':'Angamardana','bhuta-shuddhi':'Bhuta Shuddhi','online':'七天線上課程','private':'私人教學','retreat':'瑜伽 × 阿育吠陀靜修營'};
function reply(value) { return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }
function literal(value) { return /^[\s]*[=+\-@]/.test(value) ? "'" + value : value; }
function valid(d) {
  if (!d || typeof d !== 'object' || Array.isArray(d)) return false;
  const limits = {name:100,email:254,phone:32,preference:300,requestId:36,course:40};
  for (const key in limits) if(typeof d[key] !== 'string' || d[key].length > limits[key] || (key !== 'preference' && !d[key].trim())) return false;
  return /^[a-f0-9-]{36}$/i.test(d.requestId) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) && /^[+\d ()-]{6,32}$/.test(d.phone)
    && Object.prototype.hasOwnProperty.call(COURSE,d.course) && ['kl-pj','online','flexible'].includes(d.location)
    && ['new','returning'].includes(d.experience) && ['zh','en'].includes(d.language) && d.consent === true && d.privacyVersion === '2026-11-09';
}
function doGet() { return reply({service:'Yoga Sri registration',accepts:'POST'}); }
function doPost(e) {
  let lock;
  try {
    if (!e || !e.postData || e.postData.contents.length > 12000) return reply({error:'invalid_request'});
    const envelope = JSON.parse(e.postData.contents);
    const props = PropertiesService.getScriptProperties();
    const token = props.getProperty('REGISTRATION_TOKEN');
    const spreadsheetId = props.getProperty('REGISTRATION_SPREADSHEET_ID');
    if (!token || token.length < 32 || !spreadsheetId) return reply({error:'not_configured'});
    if (envelope.token !== token) return reply({error:'forbidden'});
    const d = envelope.registration;
    if (!valid(d)) return reply({error:'invalid_input'});
    lock = LockService.getScriptLock();
    if (!lock.tryLock(5000)) return reply({error:'busy'});
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(TAB);
    if (!sheet || JSON.stringify(sheet.getRange(1,1,1,15).getValues()[0]) !== JSON.stringify(HEADERS)) return reply({error:'schema_mismatch'});
    const last = sheet.getLastRow();
    if (last > 10000) return reply({error:'capacity_review_required'});
    const rows = last > 1 ? sheet.getRange(2,1,last-1,15).getValues() : [];
    const existing = rows.find(row => row[0] === d.requestId);
    if (existing) return reply({persisted:true,requestId:d.requestId});
    const now = new Date();
    // Counts are persisted in the sheet, so instance restarts do not reset limits.
    const recent = rows.filter(row => row[1] instanceof Date && now.getTime()-row[1].getTime()<3600000);
    const perEmail = rows.filter(row => row[1] instanceof Date && now.getTime()-row[1].getTime()<86400000 && String(row[3]).replace(/^'/,'').toLowerCase()===d.email.toLowerCase());
    if (recent.length >= 50 || perEmail.length >= 5) return reply({error:'rate_limited'});
    const row = [d.requestId,now,literal(d.name),literal(d.email),literal(d.phone),COURSE[d.course],{'kl-pj':'吉隆坡 / 八打靈再也',online:'線上',flexible:'可以協調'}[d.location],d.experience==='new'?'首次參加':'復訓',literal(d.preference),d.language==='zh'?'中文':'English','待確認','未收款','',true,d.privacyVersion];
    if(last+1>sheet.getMaxRows()) sheet.insertRowsAfter(sheet.getMaxRows(),100);
    sheet.getRange(last+1,1,1,15).setNumberFormat('@').setValues([row]);
    sheet.getRange(last+1,2).setNumberFormat('yyyy-mm-dd hh:mm');
    SpreadsheetApp.flush();
    return reply({persisted:true,requestId:d.requestId});
  } catch (_) { return reply({error:'storage_unavailable'}); }
  finally { if(lock && lock.hasLock()) lock.releaseLock(); }
}
