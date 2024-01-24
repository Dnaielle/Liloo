
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./Assets/mp3/${pickRandom(["Guru", "Guru1", "Guru2", "Guru3", "Guru4"])}.mp3`

  text = m.quoted.text;
  }

  try {
    m.react(rwait)
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/c3f9e4124de1f31c1c6ae.jpg' },
      caption: 'Thinking....'
    }, {quoted: m})
    conn.sendPresenceUpdate('composing', m.chat);
} 

handler.customPrefix = /^(بوت|ناكسو)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
