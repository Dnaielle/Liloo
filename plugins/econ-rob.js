
let ro = 3000
let handler = async (m, { conn, usedPrefix, command}) => {
    let time = global.db.data.users[m.sender].lastrob + 7200000
    if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `⏱️¡انتظر! عليك الانتظار  *${msToTime(time - new Date())}* للسرقة مرة اخرى`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `✳️ قم بالاشارة الى الضحية`
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
    if (users.exp < rob) return m.reply(`🔖 @${who.split`@`[0]} لديه اقل منn *${ro} خبرة*\n لا تسرق من فقير":`, null, { mentions: [who] })    
   global.db.data.users[m.sender].exp += rob
   global.db.data.users[who].exp -= rob
  
    m.reply(`
  ‣ لقد سرقت *${rob} خبرة* a @${who.split`@`[0]}
  `, null, { mentions: [who] })
    global.db.data.users[m.sender].lastrob = new Date * 1
  }

  handler.help = ['rob']
  handler.tags = ['economy']
  handler.command = ['سرقة', 'rob']
  
  export default handler
  
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return hours + " ساعة " + minutes + " دقيقة"
  }
  
