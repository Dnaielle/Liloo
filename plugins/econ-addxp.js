//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ اشر للمستخدم'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ ادخل كمية الخبرة التي تريد اضافتها'
  if (isNaN(txt)) throw ' 🔢 الاعضاء فقط'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ الحد الادنى *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *اضافة خبرة*
┌──────────────
▢  *المجموع:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ هل تلقيت \n\n *+${xp} XP*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['economy']
handler.command = ['اضف2'] 
handler.rowner = true

export default handler

