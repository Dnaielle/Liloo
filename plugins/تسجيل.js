//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ انت بل فعل مسجل\n\nترغب بأعادة التسجيل?\n\n 📌 استخدم الامر \n*${usedPrefix}الغاء-التسجيل* <مع الرقم السري>`
  if (!Reg.test(text)) throw `⚠️ استخدام خاطئ\n\n ✳️ استخدم الامر: *${usedPrefix + command} لقب.عمر*\n📌مثال : *${usedPrefix + command}* naksu.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ لايمكن ان يكون لاسم فارغ'
  if (!age) throw '✳️ لايمكن للعمر ان يكون فارغ'
  if (name.length >= 30) throw '✳️اسم طويل' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 يبدو ان العجوز يريت اللعب قليلا'
  if (age < 5) throw '🚼  يالك من طفل لطيف يريت اللعب مع البوت '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *التسجيل* 」─
▢ *الاسم:* ${name}
▢ *العمر* : ${age} years
▢ *الرقم السري* :
${sn}
└──────────────

 *${usedPrefix}اوامر* لعرض الاوامر
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['تسجيل', 'التسجيل', 'register', 'registrar'] 

export default handler

