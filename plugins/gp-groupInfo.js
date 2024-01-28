//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
┌──「 *معلومات المجموعة* 」
▢ *♻️id:*
   • ${groupMetadata.id}
▢ *🔖الاسم* : 
• ${groupMetadata.subject}
▢ *👥الاعضاء* :
• ${participants.length}
▢ *🤿المؤسس:*
• @${owner.split('@')[0]}
▢ *🕵🏻‍♂️المشرفين:*
 ${listAdmin}
▢ *🪢 اعدادات المجموعة:*
• ${isBanned ? '✅' : '❎'} الحظر
• ${welcome ? '✅' : '❎'} الترحيب
• ${detect ? '✅' : '❎'} الكاشف
• ${del ? '❎' : '✅'} مضاد الحذف
• ${antiLink ? '✅' : '❎'} مضاد الروابط

*▢  📬 اعدادات الرسائل:*
• الترحيب: ${sWelcome}
• المغادرة: ${sBye}
• التميز: ${sPromote}

▢ *📌الوصف* :
   • ${groupMetadata.desc?.toString() || 'unknown'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['الغروب', 'الجروب', 'المجموعة'] 
handler.group = true

export default handler
