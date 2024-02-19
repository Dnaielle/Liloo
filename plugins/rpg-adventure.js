import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ المستخدم غير موجود في قاعدة البيانات`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
let user = global.db.data.users[who]
let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
let { name, exp, credit, lastclaim, registered, regTime, age, level, role, wealth, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp 
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')

// • @${who.replace(/@.+/, '')}
let str = `*🪪 الاسم:* ${username}${about ? '\n\n 🎌 *الوصف:* ' + about : ''}

*⚠️ الانذارات:* ${warn}/${maxwarn}

*💰 الذهب :* ${credit}

*✨ المستوى* : ${level}

*⬆️ الخبرة* : المجموع ${exp} (${user.exp - min} / ${xp})\n${math <= 0 ? `مستعد لي *${usedPrefix}رفع المستوى*` : `*${math}خبرة*`}

*🏆 الرتبة:* ${role}

*📇 مسجل :* ${registered ? 'نعم': 'لا'}

*⭐ مميز* : ${prem ? 'نعم' : 'لا'}
`
    conn.sendFile(m.chat, pp, 'profil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['profile']
handler.tags = ['group']
handler.command = ['بروف'] 

export default handler
 
