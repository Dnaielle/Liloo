let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ اشر للمستخدم'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ ادخل كمية الذهب الذي تريد اضافته
    if (isNaN(txt)) throw '🔢 الاعضاء فقط'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ الحد الادنى  *1*'
    let users = global.db.data.users
   users[who].credit += dmt

    await m.reply(`≡ *تمت اضافة ذهب*
┌──────────────
▢ *العنوان:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ هل تلقيت الذهب \n\n *+${dmt}* Gold`, who, m.text)
}

handler.help = ['addgold <@user>']
handler.tags = ['economy']
handler.command = ['اضف'] 
handler.rowner = true

export default handler
