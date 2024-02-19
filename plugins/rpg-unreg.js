import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '*[❗تنبيه❗] ادخل الرقم التسلسلي الخاص بك اذا لا تتذكره اكتب الامر.ماين*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '*[❗تنبيه❗] الرقم التسلسلي غير صحيح تأكد من كتابته بشكل صحيح!*\n\n*اذا كنت لا تتذكره اكتب الامر.ماين*';
  user.registered = false;
  m.reply(`*[ ✔ ] تم تسجيل خروجك بنجاح، لم تعد مسجلاً في البوت.*`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^لات(ister)?$/i;
handler.register = true;
export default handler;
