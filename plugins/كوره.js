import fs from 'fs'
let timeout = 15000
let poin = 500

let handler = async (m, { conn, command, usedPrefix }) => {
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, '👆🏻 ╎ لا يزال هنالك لغز لم تتم الإجابة عليه❌ ❯', conn.tekateki[id][0])
throw false
}

  let tekateki = await (await fetch(`https://raw.githubusercontent.com/Dnaielle/Dani/master/Kra.json?token=GHSAT0AAAAAACN6WEVVLNAIY2VMD52T4EYWZPHS5GA`)).json()
  let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = 2341 ` 📜 ╎ السؤال : * ${json.question}
*⏳ ╎ الوقت ${(timeout / 1000).toFixed(2)} ثــانــيــه
*🫔 ╎ الجائزة↞↞ ${poin} خبرة┇
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m), json, 
poin,
setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `⏲️ ╎ انتهى الوقت!!\n🔰╎ الإجابة ↞ ${json.response}┇`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}
handler.help = ['Miku Bot']
handler.tags = ['Miku Bot']
handler.command = ['رياضه']
export default handler
 
