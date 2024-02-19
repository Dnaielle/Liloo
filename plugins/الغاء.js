//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✳️ *ادخل الرقم السري*\n تأكد انه رقمك السري
  الامر...\n\n*${usedPrefix}*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '⚠️ *رقم خاطئ*'
  user.registered = false
  m.reply(`✅ تم الغاء التسجيل`)
}
handler.help = ['unreg <Num Serie>'] 
handler.tags = ['rg']

handler.command = ['الغاء-التسجيل'] 
handler.register = true

export default handler

 
