import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `[❗تنبيه❗] انت مسجل مسبقا\n\n¿تريد التسجيل مرة أخرى?\n\n 📌استخدم الامر ادناه لاعادة التسجيل\n*${usedPrefix}لات* <مع الرقم التسلسلي>`;
  if (!Reg.test(text)) throw `*[❗تنبيه❗] تنسيق غير صحيح*\n\n*—◉ استخدم الامر: ${usedPrefix + command} الاسم.العمر*\n*—◉ مثال: ${usedPrefix + command} Naksu.19*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*[❗تنبيه❗] لقد نسيت الاسم*';
  if (!age) throw '*[❗تنبيه❗] لقد نسيت العمر*';
  if (name.length >= 30) throw '[❗تنبيه❗] اسم طويل جدا اطول منك';
  age = parseInt(age);
  if (age > 100) throw '*[❗] يا الهي، كيف لا تزال على قيد الحياة في هذا العمر؟? 👴🏻*';
  if (age < 5) throw '*[❗] يا الهي!منذ متى يسمح للاطفال استخدام الواتس اب? 😲*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 المعلومات 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *الاسم:* ${name}
┃ *العمر:* ${age} سنة
┃ *الرقم التسلسلي:* 
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ ¡الرقم التسلسلي الخاص بك سوف يساعدك.
┃ في حالة الرغبة في حذف
┃ تسجيلك من البوت!
┗┅ ━━━━━━━━━━━━ ┅ ━`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|تسجيل|reg|registrar)$/i;
export default handler;
