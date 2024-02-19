let handler = async (m, { conn, args, usedPrefix }) => {
    let htki = '––––––『'
  let htka = '』––––––'
	let info = `*➞ ᴇxᴀᴍᴘʟᴇ:* ${usedPrefix}feed cat
   
- - - - - - - - - - - - - - - - - - - - - - - - - 
${htki} قائمة الحيوانات ${htka}
🐈 • قط
🐕 • كلب
🦊 • ثعلب
🐎 • حصان`
let pesan = pickRandom(['يمممم~', 'اريغاتو', 'شكراا ^-^', '...', 'شكرا لك Thanks~', 'كوماوايو ^-^'])
    let type = (args[0] || '').toLowerCase()
    let emo = (type == 'ثعلب' ? '🦊':'' || type == 'قط' ? '🐈':'' || type == 'كلب' ? '🐕':'' || type == 'حصان' ? '🐴':'' ) 
    let user = global.db.data.users[m.sender]
    let rubah = global.db.data.users[m.sender].fox
    let kuda = global.db.data.users[m.sender].horse
    let kucing = global.db.data.users[m.sender].cat
    let anjing = global.db.data.users[m.sender].dog
    switch (type) {
        case 'ثعلب':
            if (rubah == 0) return conn.sendButton(m.chat, `${htki} لايوجد ${htka}`, 'ليس لديك\'هذا الحيوان بعد!', null, [['غامر', '.الصيد'],['او من', '.متجر']],m)
            if (rubah == 10) return conn.sendButton(m.chat, `${htki} اقصى مستوى ${htka}`, 'الحيوان الخاص بك اقصى مستوى !', null, [['غامر', '.الصيد'],['او', '.متجر']],m)
            let __waktur = (new Date - user.foxlastfeed)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - user.foxlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.foxexp += 20
                    user.foxlastfeed = new Date * 1
                    m.reply(`اطعام *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (user.foxexp > naiklvl) {
                            user.fox += 1
                            user.foxexp -= (rubah * 100)
                            conn.sendButton(m.chat, `${htki} ارتقاء ${htka}`, `*تهانينا!* , الحيوان الخاص بك ارتقى`,null, [['غامر', '.الصيد'],['او من', '.متجر']], m)
                        }
                    }
                } else m.reply(`ليس لديك طعام كافي`)
            } else conn.sendButton(m.chat, `${htki} راحة ${htka}`, `حيوانك ممتلئ اطعمه لاحقا\n➞ *${waktur}*`, null, [['غامر', '.الصيد']], m)
            break
        case 'قط':
            if (kucing == 0) return conn.sendButton(m.chat, `${htki} لايوجد ${htka}`, 'ليس لديك\'هذا الحيوان بعد!', null, [['غامر', '.الصيد'],['او', '.متجر']],m)
            if (kucing == 10) return conn.sendButton(m.chat, `${htki} اقصى مستوى${htka}`, 'حيوانك وصل لاقصى مستوى !', null, [['غامر', '.الصيد'],['او من', '.متجر']],m)
            let __waktuc = (new Date - user.catlastfeed)
            let _waktuc = (600000 - __waktuc)
            let waktuc = clockString(_waktuc)
            if (new Date - user.catlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.catngexp += 20
                    user.catlastfeed = new Date * 1
                    m.reply(`اطعام *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            
                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (user.catexp > naiklvl) {
                            user.cat += 1
                            user.catngexp -= (kucing * 100)
                            conn.sendButton(m.chat, `${htki} ارتقى ${htka}`, `*تهانينا!* , لقد ارتقى حيوانك`,null, [['غامر', '.الصيد'],['او من', '.متجر']],m)
                        }
                    }
                } else m.reply(`ليس لديك طعام كافي`)
            } else conn.sendButton(m.chat, `${htki} راحة ${htka}`, `حيوانك ممتلئ اطعمه لاحقا\n➞ *${waktuc}*`, null, [['غامر', '.الصيد']], m)
            break
        case 'كلب':
            if (anjing == 0) return conn.sendButton(m.chat, `${htki} لايوجد ${htka}`, 'ليس لديك\'هذا الحيوان بعد!', null, [['غامر', '.الصيد'],['او', '.متجر']],m)
            if (anjing == 10) return conn.sendButton(m.chat, `${htki} اقصى مستوى${htka}`, 'حيوانك وصل لاقصى مستوى !', null, [['غامر', '.الصيد'],['او من', '.متجر']],m)
            let __waktua = (new Date - user.doglastfeed)
            let _waktua = (600000 - __waktua)
            let waktua = clockString(_waktua)
            if (new Date - user.doglastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.dogexp += 20
                    user.doglastfeed = new Date * 1
                    m.reply(`اطعام *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (user.dogexp > naiklvl) {
                            user.dog += 1
                            user.dogexp -= (anjing * 100)
                            conn.sendButton(m.chat, `${htki} ارتقى ${htka}`, `*تهانينا!* , حيوانك ارتقى`,null, [['غامر', '.الصيد'],['او من', '.petshop']], m)
                        }
                    }
                } else m.reply(`ليس لديك طعام كافي`)
            } else conn.sendButton(m.chat, `${htki} راحة ${htka}`, `حيوانمك ممتلئ اطعمه لاحقا\n➞ *${waktua}*`, null, [['غامر', '.الصيد']], m)
            break
        case 'حصان':
            if (kuda == 0) return conn.sendButton(m.chat, `${htki} ليس لديك ${htka}`, 'لاتملك\'هذا الحيوان بعد!', null, [['غامر', '.الصيد'],['او من', '.متجر']],m)
            if (kuda == 10) return conn.sendButton(m.chat, `${htki} مستوى اقصى ${htka}`, 'حيوانك وصل لمستوى لاقصى !', null, [['غامر', '.الصيد'],['و من', '.متجر']],m)
            let __waktuk = (new Date - user.horselastfeed)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - user.horselastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.horseexp += 20
                    user.horselastfeed = new Date * 1
                    m.reply(`اطعام *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (user.horseexp > naiklvl) {
                            user.horse += 1
                            user.horseexp -= (kuda * 100)
                            conn.sendButton(m.chat, `${htki} ارتقاء ${htka}`, `*تهانينا!* , لقد ارتقى حيوانك`,null, [['غامر', '.الصيد'],['او من', '.متجر']], m)
                        }
                    }
                } else m.reply(`ليس لديك طعام كافي`)
            } else conn.sendButton(m.chat, `${htki} راحة ${htka}`, `حيوانك ممتلئ اطعمه لاحقا\n➞ *${waktuk}*`, null, [['غامر', '.الصيد']], m)
            break
        default:
            return conn.sendButton(m.chat, `${htki} لايوجد ${htka}`, info, null, [['غامر', '.الصيد'],['او من', '.متجر']], m)
    }
}
handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = ['اطعام'] 

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
              }