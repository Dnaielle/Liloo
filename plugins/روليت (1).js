

let handler = async (m, { conn, args, text, usedPrefix , command }) => {




    let amount = parseInt(args[0])
    let color = args[1]?.toLowerCase()
    if (args.length < 2 )  throw `✳️ استخدام الامر الصحيح: ${usedPrefix + command} <amount> <color>\n\n مثال: ${usedPrefix + command} 500 احمر`
    let colores = ['احمر', 'اسود']
    let colour = colores[Math.floor(Math.random() * colores.length)];
    let user = global.db.data.users[m.sender]
    if (isNaN(amount) || amount < 500) throw `✳️ الحد الادنى هو 500`
    if (!colores.includes(color)) throw '✳️ عليك لاختيار بين اللون الاحمر او الاسود'
    if (user.credit < amount) throw '✳️ ليس لديك ذهب كافي!'
    if (amount > 100000) throw `🟥 *لا يمكنك وضع اكثر من 100000*`
   let result = ''
    if (colour == color) {
        result = `${colour == 'احمر' ? 'الكرة وقعت على اللون 🔴' : 'الكرة وقعت على اللون ⚫'} \n\nلقد ربحت ${amount * 2} ذهب`
        user.credit += amount * 2
    } else {
        result = `${colour == 'احمر' ? 'الكرة، وقعت على اللون 🔴' : 'الكرة وقعت على اللون ⚫'} \n\nانت خسرت ${amount} ذهب`
        user.credit -= amount
    }
    m.reply(result)
}
handler.help = ['roulette <amount> <color(red/black)>']
handler.tags = ['economy']
handler.command = ['رول', 'rt']

handler.group = true

export default handler