import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
 const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `المستخدم الذي ذكرته غير مسجل في قاعدة البيانات الخاصة بي`;
  try {
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `*الاسم:* ${username} ${registered ? '(' + name + ') ': ''}
*الرقم:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*الرابط:* wa.me/${who.split`@`[0]}${registered ? '\n*مسجل:* ' + age + ' سنة' : ''}
*الحد:* ${limit} 
*مسجل:* ${registered ? 'اجل': 'لا'}
*مميز:* ${premiumTime > 0 ? 'اجل' : (isPrems ? 'اجل' : 'لا') || ''}
*الرقم التسلسلي:* 
${sn}`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^بروف|profile?$/i;
export default handler;