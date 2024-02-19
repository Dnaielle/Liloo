let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let name = conn.getName(m.sender)
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

    let image = 'https://telegra.ph/file/8ed77669c518ee5d4ed92.png'

    conn.sendFile(m.chat, image, 'image.png', `اهلا صديقي ${taguser} تحتاج مساعدة?  اكتب.اوامر`, m)
}

handler.customPrefix = /^(بوت|ياسو)$/i
handler.command = new RegExp

export default handler
