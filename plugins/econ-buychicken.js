let handler = async (m, { conn, command, args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]


   
    
    if (user.chicken > 0) return m.reply('انت بالفعل لديك دحاجة')
    if (user.credit < 500) return m.reply(`🟥 *ليس لديك ذهب كافي لشراء دجاجة*`)

    user.credit -= 1000
    user.chicken += 1
    m.reply(`🎉 لقد اشتريت دجاجة استخدم الامر ${usedPrefix}حارب للقتال)
}

handler.help = ['buych']
handler.tags = ['economy']
handler.command = ['شراء-دجاجة', 'buych'] 

handler.group = true

export default handler
