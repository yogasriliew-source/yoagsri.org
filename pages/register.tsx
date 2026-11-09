import Head from 'next/head';
import { useRef, useState } from 'react';
import type { GetServerSideProps } from 'next';
import { registrationCourses } from '../lib/registration';

type Props = { language: 'zh' | 'en'; initialCourse: string; enabled: boolean };
export const getServerSideProps: GetServerSideProps<Props> = async ({ query, res }) => {
  res.setHeader('Cache-Control', 'no-store');
  return { props: { language: query.lang === 'en' ? 'en' : 'zh', initialCourse: registrationCourses.some(c => c.id === query.course) ? String(query.course) : '', enabled: Boolean(process.env.REGISTRATION_WEBHOOK_URL?.startsWith('https://') && process.env.REGISTRATION_WEBHOOK_TOKEN && process.env.REGISTRATION_SITE_ORIGIN) } };
};
export default function Register({ language, initialCourse, enabled }: Props) {
  const en = language === 'en';
  const t = (zh: string, english: string) => en ? english : zh;
  const [course, setCourse] = useState(initialCourse);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');
  const requestId = useRef('');
  const sending = useRef(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current || !enabled) return;
    sending.current = true; setBusy(true); setError('');
    const fields = new FormData(event.currentTarget);
    if (!requestId.current) requestId.current = crypto.randomUUID();
    try {
      const response = await fetch('/api/registration', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(fields), language, consent: fields.get('consent') === 'on', requestId: requestId.current }) });
      const result = await response.json();
      if (!response.ok || !result.reference) throw new Error('unconfirmed');
      setReference(result.reference);
    } catch { setError(t('暂时无法确认提交结果。请保留页面并重试；重试会沿用同一申请编号，以免重复报名。', 'We could not confirm delivery. Keep this page open and retry; the same request ID will be used to avoid duplicate applications.')); }
    finally { sending.current = false; setBusy(false); }
  }
  return <main className="registration-page" lang={en ? 'en' : 'zh-Hans'}>
    <Head><title>{t('课程报名', 'Course Registration')} | Yoga Sri</title><meta name="robots" content="noindex,follow"/></Head>
    <header className="registration-header"><a href={en ? '/en' : '/'}>Yoga Sri</a><a href={'/register?lang=' + (en ? 'zh' : 'en') + '&course=' + course}>{en ? '中文' : 'English'}</a></header>
    <div className="registration-layout"><aside><span className="eyebrow">BEGIN YOUR PRACTICE</span><h1>{t('从这里，开始你的练习。', 'Your practice begins here.')}</h1><p>{t('选择学习方向，留下联系方式。我们会通过 Email 联系你，确认班次、费用与适合度。', 'Choose your course and leave your contact details. We will contact you by email to confirm dates, fees and suitability.')}</p><ol><li>{t('填写报名申请', 'Send your application')}</li><li>{t('确认班次与费用', 'Confirm dates and fees')}</li><li>{t('确认名额后付款', 'Pay after your place is confirmed')}</li></ol><p>{t('提交申请不代表名额已确认。现阶段无需付款，也不会自动扣费。', 'An application does not reserve a place. No payment is required or collected at this stage.')}</p><a href="https://wa.me/60126725549">{t('有问题？联系 Yoga Sri', 'Questions? Contact Yoga Sri')}</a></aside>
    <section className="registration-panel" aria-label={t('报名表', 'Registration form')}>
    {reference ? <div role="status"><span className="eyebrow">THANK YOU</span><h2>{t('已收到你的报名申请', 'Application received')}</h2><p>{t('目前状态：等待确认班次及费用。请等待我们的 Email 回复。', 'Status: awaiting date and fee confirmation. Please wait for our email reply.')}</p><p>{t('申请编号', 'Reference')}: <span className="registration-reference">{reference}</span></p><p>{t('请保存此编号。这不是付款收据或名额确认。', 'Save this reference. This is not a payment receipt or place confirmation.')}</p><a href={en ? '/en' : '/'}>{t('返回课程首页', 'Back to courses')}</a></div> : <>
    <h2>{t('课程报名申请', 'Course application')}</h2>
    {!enabled && <p className="registration-notice" role="status">{t('线上报名正在准备中，暂时无法提交资料。你仍可通过 WhatsApp 联系老师。', 'Online registration is being prepared and submissions are not yet available. You can still contact your teacher on WhatsApp.')}</p>}
    <form onSubmit={submit} aria-busy={busy}><fieldset disabled={busy || !enabled}>
      <label>{t('想参加的课程', 'Course')}<select name="course" value={course} onChange={e => setCourse(e.target.value)} required><option value="">{t('请选择课程', 'Choose a course')}</option>{registrationCourses.map(c => <option key={c.id} value={c.id}>{en ? c.en : c.zh}</option>)}</select></label>
      <div className="registration-fields"><label>{t('姓名', 'Name')}<input name="name" autoComplete="name" maxLength={100} required/></label><label>{t('手机号码（含国家代码）', 'Phone (with country code)')}<input name="phone" type="tel" autoComplete="tel" placeholder="+60" maxLength={32} required/></label></div>
      <label>Email<input name="email" type="email" autoComplete="email" maxLength={254} required/></label>
      <div className="registration-fields"><label>{t('上课地点偏好', 'Location preference')}<select name="location"><option value="kl-pj">{t('吉隆坡 / 八打灵再也', 'Kuala Lumpur / Petaling Jaya')}</option><option value="online">{t('线上', 'Online')}</option><option value="flexible">{t('可以协调', 'Flexible')}</option></select></label><label>{t('学习经验', 'Experience')}<select name="experience"><option value="new">{t('首次参加此课程', 'New to this course')}</option><option value="returning">{t('已学过，希望复训', 'Returning for review')}</option></select></label></div>
      <label>{t('希望的日期或时段（选填）', 'Preferred dates or times (optional)')}<textarea name="preference" rows={3} maxLength={300}/></label>
      <p className="registration-help">{t('日期与上课形式以老师确认为准。请勿在此填写病历、身份证或付款资料；如需讨论练习适合度，我们会私下联系。', 'Dates and teaching format are subject to confirmation. Do not enter medical, identity-document or payment information here; suitability can be discussed privately.')}</p>
      <div className="registration-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
      <label className="registration-consent"><input type="checkbox" name="consent" required/><span>{t('我同意 Yoga Sri 使用以上资料处理本次报名并联系我。我了解班次、费用及名额仍需确认。资料不会公开显示，也不会自动加入营销名单。如需删除申请，可联系 Yoga Sri。', 'I agree that Yoga Sri may use these details to process and contact me about this application. Dates, fees and places require confirmation. Details will not be displayed publicly or automatically added to marketing lists. Contact Yoga Sri to request deletion.')}</span></label>
      <button className="registration-submit" type="submit">{busy ? t('正在提交…', 'Sending…') : t('提交报名申请', 'Submit application')}</button>
    </fieldset>{error && <p role="alert" className="registration-notice">{error}</p>}</form></>}
    </section></div>
  </main>;
}
