const ro = 3000;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob + 9800000;
  if (new Date - global.db.data.users[m.sender].lastrob < 9800000) throw `*⏱️¡يا! انتظر ${msToTime(time - new Date())} لسرقة مرة أخرى*`;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) throw `*[❗] ضع علامة على شخص ما للسرقة.*`;
  if (!(who in global.db.data.users)) throw `*[❗] لم يتم العثور على المستخدم في قاعدة البيانات الخاصة بي.*`;
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.credit < rob) return m.reply(`😔 @${who.split`@`[0]} لديه أقل من *${ro} ذهب*\nلا تسرق من فقير":`, null, {mentions: [who]});
  global.db.data.users[m.sender].credit += rob;
  global.db.data.users[who].credit -= rob;
  m.reply(`*‣ سرقت ${rob} ذهب@${who.split`@`[0]}*`, null, {mentions: [who]});
  global.db.data.users[m.sender].lastrob = new Date * 1;
};
handler.help = ['rob'];
handler.tags = ['econ'];
handler.command = ['سرقة2', 'roob'];
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (10000 * 60)) % 60);
  let hours = Math.floor((duration / (10000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' ساعة ' + minutes + ' دقائق';
}
