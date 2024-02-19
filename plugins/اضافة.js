//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ اشر الى شخص'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ اضف الكمية'
  if (isNaN(txt)) throw ' 🔢 ارقام فقط'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ اقل شيء *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *اضافة خبرة*
┌──────────────
▢  *المجموع:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ لقد تلقيت \n\n *+${xp} خبرة*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['economy']
handler.command = ['اضافة'] 
handler.rowner = true

export default handler

 
