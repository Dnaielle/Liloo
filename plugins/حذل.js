
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ اشر الى المستخدم`
        if (!(who in global.db.data.users)) throw `✳️ غير موجود بقاعدة البيانات`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`⚠️ *حذف الانذار*
         
▢ الانذار: *-1*
▢ مجموع الانذارات: *${warn - 1}*`)
         m.reply(`✳️ لقد قام احد لمشرفين بازالة انذارك قم بشكره *${warn - 1}*`, who)
         } else if (warn == 0) {
            m.reply('✳️ المستخدم ليس لديه انذارات')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['حذف-انذار', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
 
