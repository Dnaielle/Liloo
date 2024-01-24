
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ ادخل اسم المستخدم\n\n📌مثال: ${usedPrefix + command} nakso_u` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *تجسس* 
▢ *🔖الاسم:* ${res.name} 
▢ *🔖اسم السمتخدم:* ${res.username}
▢ *👥المتابعين:* ${res.followersH}
▢ *🫂يتابع:* ${res.followingH}
▢ *📌الوصف:* ${res.description}
▢ *🏝️المنشورات:* ${res.postsH}

▢ *🔗 الرابط* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['downloader']
handler.command = ['تجسس'] 

export default handler
