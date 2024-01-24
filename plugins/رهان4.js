const rewards = {
 exp: 15000,
    credit: 35999,
    money: 10000,
  }
  const cooldown = 604800000
  let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastweekly < cooldown) throw `لقد استلمت جائزتك بالفعل *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] += rewards[reward]
      text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
    }
    //conn.sendButton(m.chat,'*––––––『 WEEKLY 』––––––*', text.trim(), null, [['Profile', ''], ['Monthly', '.monthly']],m)
    m.reply(`
    🎁 *الجائزة الاسبوعية*
    
    ▢ *لقد حصلا على*

    ${text}
     ${text}`)
    user.lastweekly = new Date * 1
  }
  handler.help = ['weekly']
  handler.tags = ['econ']
  handler.command = /^(اسبوعي)$/i
  
  handler.cooldown = cooldown
  
  export default handler
