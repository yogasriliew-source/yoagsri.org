export const registrationCourses = [
  { id: 'beginner', zh: '哈他瑜伽入门', en: 'Hatha Yoga for Beginners' },
  { id: 'surya-shakti', zh: 'Surya Shakti｜太阳力量', en: 'Surya Shakti' },
  { id: 'surya-kriya', zh: 'Surya Kriya｜太阳克里亚', en: 'Surya Kriya' },
  { id: 'yogasanas', zh: 'Yogasanas｜瑜伽体式', en: 'Yogasanas' },
  { id: 'angamardana', zh: 'Angamardana', en: 'Angamardana' },
  { id: 'bhuta-shuddhi', zh: 'Bhuta Shuddhi｜五大元素净化', en: 'Bhuta Shuddhi' },
  { id: 'online', zh: '七天线上课程', en: '7-Day Online Course' },
  { id: 'private', zh: '私人教学', en: 'Private Tuition' },
  { id: 'retreat', zh: '瑜伽 × 阿育吠陀静修营', en: 'Yoga × Ayurveda Retreat' },
];
export function registrationLink(title: string, language = 'zh') {
  const match = registrationCourses.find(c => title.toLowerCase().includes(c.en.toLowerCase()))
    || (title.includes('7-Day') ? registrationCourses.find(c => c.id === 'online') : undefined);
  return '/register?lang=' + language + (match ? '&course=' + match.id : '');
}
export function validateRegistration(body: any) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const text = (key: string, max: number, required = true) => {
    const v = body[key];
    return typeof v === 'string' && v.trim().length <= max && (!required || v.trim().length > 0) ? v.trim() : null;
  };
  const name = text('name', 100), email = text('email', 254), phone = text('phone', 32);
  const preference = text('preference', 300, false), course = text('course', 40);
  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !phone || !/^[+\d ()-]{6,32}$/.test(phone)
    || preference === null || !registrationCourses.some(c => c.id === course) || body.consent !== true
    || !['zh','en'].includes(body.language) || !['new','returning'].includes(body.experience)
    || !['kl-pj','online','flexible'].includes(body.location)
    || typeof body.requestId !== 'string' || !/^[a-f0-9-]{36}$/i.test(body.requestId) || body.website) return null;
  return { name, email, phone, course, preference, language: body.language, experience: body.experience, location: body.location, consent: true, privacyVersion: '2026-11-09', requestId: body.requestId };
}
