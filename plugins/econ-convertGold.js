
const xppercredit = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xppercredit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xppercredit * count) {
    global.db.data.users[m.sender].exp -= xppercredit * count
    global.db.data.users[m.sender].credit += count
    conn.reply(m.chat, `
┌─「 *اشعار الشراء* 」
‣ *الشراء الاسمي* : + ${count} 
‣ *انفق* : -${xppercredit * count} خبرة
└──────────────`, m)
  } else conn.reply(m.chat, `❎ اعتذر, ليس لديك مايكفي من الخبرة *${count}* ذهب\n\nيمكنك الحصول على من *الخبرة* استخدم اوامر التي فل الاوامر*`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['economy']
handler.command = ['شراء', 'buyall'] 

handler.disabled = false

export default handler
