//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ قم بالاشارة لشخص\n\n📌 مثال : ${usedPrefix + command} @مستخدم`
if (global.prems.includes(who.split`@`[0])) throw '✳️ المستخدم مميز بل فعل'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ مميز

@${who.split`@`[0]} الان انت مستخدم مميز
┌───────────
▢ *الاسم:* ${user.name}
└───────────
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['مميز', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
 
