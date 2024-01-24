import {
    promises,
    readFileSync
   } from "fs"
   import {
    join
   } from "path"
   import {
    xpRange
   } from "../lib/levelling.js"
   import moment from "moment-timezone"
   import os from "os"
  
  const str = `
  ✦ ───『 *المرح* 』─── ⚝
  ◈ .كت
  ◈ .خمن
  ◈ .ايموجي
  ◈ .عين
  ◈ .علم
  ◈ .رتب
  ◈ .احزر
  ◈ .دين
  ╰──────────⳹
  
  ✦ ───『 *التحميلات* 』─── ⚝
  ◈ .فيس <url>
  ◈ .gdrive 🅟
  ◈ .gitclone <url>
  ◈ .تجسس 
  ◈ .انستا
  ◈ .mediafire <url>
  ◈ .mega
  ◈ .modapk
  ◈ .play <بل اسم>
  ◈ .play2 <بل اسم>
  ◈ .play3 <فديو بل اسم>
  ◈ .سبوت
  ◈ .تيك <url>
  ◈ .تويت <url>
  ◈ .يوت <url>
  ◈ .بحث
  ◈ .يوت2 <yt-link>
  ◈ .خلفية <query>
  ╰──────────⳹
  
  ✦ ───『 *العاب* 』─── ⚝
  ◈ .رهان <amount>
  ◈ .رهان3 [from to]
  ◈ .شطرنج delete
  ◈ .رهان4 
  ◈ .رول
  ◈ .رياضيات
  ◈ .حجر/ورق/مقص تحدي
  ◈ .ا حجر ورق مقص مع البوت 
  ◈ . اكس او
  ╰──────────⳹
  
  ✦ ───『 *الصانع* 』─── ⚝
  ◈ .blur
  ◈ .difuminar2
  ◈ .hornycard
  ◈ .hornylicense
  ◈ .gfx1
  ◈ .gfx2
  ◈ .gfx3
  ◈ .gfx4
  ◈ .gfx5
  ◈ .gfx6
  ◈ .gfx7
  ◈ .gfx8
  ◈ .gfx9
  ◈ .gfx10
  ◈ .gfx11
  ◈ .gfx12
  ◈ .simpcard
  ◈ .itssostupid
  ◈ .iss
  ◈ .stupid
  ◈ .tweet <comment>
  ◈ .lolicon
  ◈ .ytcomment <comment>
  ╰──────────⳹
  
  ✦ ───『 *ملصق* 』─── ⚝
  ◈ .سرقه/حقوق
  ◈ .لصوره
  ◈ .لفيديو
  ◈ .ملصق
  ◈ دائري ملصق2
  ◈ .قص الخلفية ملصق3
  ╰──────────⳹

  
  ✦ ───『 *الموارد* 』─── ⚝
  ◈ .اضف ذهب <@user>
  ◈ .اضف خبرة <@user>
  ◈ .البنك
  ◈ .buych
  ◈ .حارب
  ◈ .شراء
  ◈ .شراء-الكل
  ◈ .يومي
  ◈ .نقل
  ◈ .gamble <amount> <color(red/black)>
  ◈ .لفل
  ◈ .رانك
  ◈ .سرقة
  ◈ .المحفظة
  ◈ .عمل
  ╰──────────⳹
  
  ✦ ───『 *انمي* 』─── ⚝
  ◈ .انمي
  ◈ .akira
  ◈ .akiyama
  ◈ .anna
  ◈ .asuna
  ◈ .ayuzawa
  ◈ .boruto
  ◈ .chiho
  ◈ .chitoge
  ◈ .deidara
  ◈ .erza
  ◈ .elaina
  ◈ .eba
  ◈ .emilia
  ◈ .hestia
  ◈ .hinata
  ◈ .inori
  ◈ .isuzu
  ◈ .itachi
  ◈ .itori
  ◈ .kaga
  ◈ .kagura
  ◈ .kaori
  ◈ .keneki
  ◈ .kotori
  ◈ .kurumi
  ◈ .madara
  ◈ .mikasa
  ◈ .miku
  ◈ .minato
  ◈ .naruto
  ◈ .nezuko
  ◈ .sagiri
  ◈ .sasuke
  ◈ .sakura
  ◈ .manhwa
  ◈ .waifu
  ◈ .neko
  ◈ .zerotwo
  ◈ .loli
  ◈ .pokedex <pokemon>
  ◈ .trace
  ╰──────────⳹
  
  
  ✦ ───『 *ادوات* 』─── ⚝
  ◈ .nowa
  ◈ .qr <text>
  ◈ .qrcode <text>
  ◈ .style <key> <text>
  ◈ .الطقس *<place>*
  ◈ .hdr
  ◈ .عنصر
  ◈ .غوغل
  ◈ .wa
  ◈ .ويكي
  ╰──────────⳹
  
  ✦ ───『 *ذكاء اصتناعي* 』─── ⚝
  ◈ .ناكسو
  ◈ .هارو
  ◈ .لانمي
  ◈ .لكارتون
  ◈ .ai
  ◈ .bard
  ◈ .alexa
  ◈ .bingimg
  ╰──────────⳹
  
  
  ✦ ───『 *اوامر اخرى* 』─── ⚝
  ◈ .بينغ
  ◈ .العمل
  ◈ .سيرفر
  ◈ .alive
  ◈ .info
  ◈ .المطور
  ◈ .القائمة
  ◈ .ميسي
  ◈ .رونالدو
  ◈ .تقطيم
  ◈ .طقمي
  ◈ .طقم2
  ╰──────────⳹

  `

  const handler = async (m, {
    conn,
    command,
    text,
    args,
    usedPrefix
  }) => {
    
  
   let glb = global.db.data.users
   let usrs = glb[m.sender]
   let tag = `@${m.sender.split("@")[0]}`
   let mode = global.opts["self"] ? "Private" : "Public"
   
   let {
  age,
  exp,
  limit,
  level,
  role,
  registered,
  credit
   } = glb[m.sender]
   let {
  min,
  xp,
  max
   } = xpRange(level, global.multiplier)
   let name = await conn.getName(m.sender)
   let premium = glb[m.sender].premiumTime
   let prems = `${premium > 0 ? "Premium": "Free"}`
   let platform = os.platform()
  
  
   let ucpn = `${ucapan()}`
  
   let _uptime = process.uptime() * 1000
   let _muptime
   if (process.send) {
  process.send("uptime")
  _muptime = await new Promise(resolve => {
  process.once("message", resolve)
  setTimeout(resolve, 1000)
  }) * 1000
   }
   let muptime = clockString(_muptime)
   let uptime = clockString(_uptime)
  
   
   let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
   let totalreg = Object.keys(glb).length
  
    conn.gurumenu = conn.gurumenu ? conn.gurumenu : {};
    
   
    global.fcontact = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    const infoText = `
    اهلاا ${name} سينباي
    
    *${ucpn}* 
   
    乂───『 *معلومات المستخدم』───乂
    ⛥ *الاسم:* ${name}
    ⛥ *الذهب:* ${credit}
    ⛥ *الرتبة:* ${role}
    ⛥ *المستوى:* ${level}
    ⛥ *الخبرة:* ${exp}
    ╰──────────⳹
   
    乂───『 *معلومات البوت*』───乂
    ⛥ *اسم البوت:* Naksu/ناكسو
    ⛥ *الوضع:* ${mode}
    ⛥ *منصة التشغيل:* ${platform}
    ⛥ *النوع:* NodeJs
    ⛥ *وقت التشغيل:* ${muptime}
    ⛥ *البيانات:*  ${totalreg}
    ╰──────────⳹
    
  ✦ ───『 *المرح* 』─── ⚝
  ◈ .كت
  ◈ .خمن
  ◈ .ايموجي
  ◈ .عين
  ◈ .علم
  ◈ .رتب
  ◈ .احزر
  ◈ .دين
  ╰──────────⳹
  
  ✦ ───『 *التحميلات* 』─── ⚝
  ◈ .فيس <url>
  ◈ .gdrive 🅟
  ◈ .gitclone <url>
  ◈ .تجسس 
  ◈ .انستا
  ◈ .mediafire <url>
  ◈ .mega
  ◈ .modapk
  ◈ .play <بل اسم>
  ◈ .play2 <بل اسم>
  ◈ .play3 <فديو بل اسم>
  ◈ .سبوت
  ◈ .تيك <url>
  ◈ .تويت <url>
  ◈ .يوت <url>
  ◈ .بحث
  ◈ .يوت2 <yt-link>
  ◈ .خلفية <query>
  ╰──────────⳹
  
  ✦ ───『 *العاب* 』─── ⚝
  ◈ .رهان <amount>
  ◈ .رهان3 [from to]
  ◈ .شطرنج delete
  ◈ .رهان4 
  ◈ .رول
  ◈ .رياضيات
  ◈ .حجر/ورق/مقص تحدي
  ◈ .ا حجر ورق مقص مع البوت 
  ◈ . اكس او
  ╰──────────⳹
  
  ✦ ───『 *الصانع* 』─── ⚝
  ◈ .blur
  ◈ .difuminar2
  ◈ .hornycard
  ◈ .hornylicense
  ◈ .gfx1
  ◈ .gfx2
  ◈ .gfx3
  ◈ .gfx4
  ◈ .gfx5
  ◈ .gfx6
  ◈ .gfx7
  ◈ .gfx8
  ◈ .gfx9
  ◈ .gfx10
  ◈ .gfx11
  ◈ .gfx12
  ◈ .simpcard
  ◈ .itssostupid
  ◈ .iss
  ◈ .stupid
  ◈ .tweet <comment>
  ◈ .lolicon
  ◈ .ytcomment <comment>
  ╰──────────⳹
  
  ✦ ───『 *ملصق* 』─── ⚝
  ◈ .سرقه/حقوق
  ◈ .لصوره
  ◈ .لفيديو
  ◈ .ملصق
  ◈ دائري ملصق2
  ◈ .قص الخلفية ملصق3
  ╰──────────⳹

  
  ✦ ───『 *الموارد* 』─── ⚝
  ◈ .اضف ذهب <@user>
  ◈ .اضف خبرة <@user>
  ◈ .البنك
  ◈ .buych
  ◈ .حارب
  ◈ .شراء
  ◈ .شراء-الكل
  ◈ .يومي
  ◈ .نقل
  ◈ .gamble <amount> <color(red/black)>
  ◈ .لفل
  ◈ .رانك
  ◈ .سرقة
  ◈ .المحفظة
  ◈ .عمل
  ╰──────────⳹
  
  ✦ ───『 *انمي* 』─── ⚝
  ◈ .انمي
  ◈ .akira
  ◈ .akiyama
  ◈ .anna
  ◈ .asuna
  ◈ .ayuzawa
  ◈ .boruto
  ◈ .chiho
  ◈ .chitoge
  ◈ .deidara
  ◈ .erza
  ◈ .elaina
  ◈ .eba
  ◈ .emilia
  ◈ .hestia
  ◈ .hinata
  ◈ .inori
  ◈ .isuzu
  ◈ .itachi
  ◈ .itori
  ◈ .kaga
  ◈ .kagura
  ◈ .kaori
  ◈ .keneki
  ◈ .kotori
  ◈ .kurumi
  ◈ .madara
  ◈ .mikasa
  ◈ .miku
  ◈ .minato
  ◈ .naruto
  ◈ .nezuko
  ◈ .sagiri
  ◈ .sasuke
  ◈ .sakura
  ◈ .manhwa
  ◈ .waifu
  ◈ .neko
  ◈ .zerotwo
  ◈ .loli
  ◈ .pokedex <pokemon>
  ◈ .trace
  ╰──────────⳹
  
  
  ✦ ───『 *ادوات* 』─── ⚝
  ◈ .nowa
  ◈ .qr <text>
  ◈ .qrcode <text>
  ◈ .style <key> <text>
  ◈ .الطقس *<place>*
  ◈ .hdr
  ◈ .عنصر
  ◈ .غوغل
  ◈ .wa
  ◈ .ويكي
  ╰──────────⳹
  
  ✦ ───『 *ذكاء اصتناعي* 』─── ⚝
  ◈ .ناكسو
  ◈ .هارو
  ◈ .لانمي
  ◈ .لكارتون
  ◈ .ai
  ◈ .bard
  ◈ .alexa
  ◈ .bingimg
  ╰──────────⳹
  
  
  ✦ ───『 *اوامر اخرى* 』─── ⚝
  ◈ .بينغ
  ◈ .العمل
  ◈ .سيرفر
  ◈ .alive
  ◈ .info
  ◈ .المطور
  ◈ .القائمة
  ◈ .ميسي
  ◈ .رونالدو
  ◈ .تقطيم
  ◈ .طقمي
  ◈ .طقم2
  ╰──────────⳹` 
;

  
  const { result, key, timeout } = await conn.sendMessage(m.chat, { video: { url: menuvid }, caption: infoText.trim(),  gifPlayback: true,
  gifAttribution: 0}, { quoted: fcontact })
  
  // Save the menu options to gurumenu
  conn.gurumenu[m.sender] = {
    result,
    key,
    timeout: setTimeout(() => {
      conn.sendMessage(m.chat, {
          delete: key
      });
      delete conn.gurumenu[m.sender];
  }, 150 * 1000),
  };
  };
  
 
  handler.before = async (m, { conn }) => {
    conn.gurumenu = conn.gurumenu ? conn.gurumenu : {};
    if (m.isBaileys || !(m.sender in conn.gurumenu)) return;
    const { result, key, timeout } = conn.gurumenu[m.sender];
    if (!m.quoted || m.quoted.id !== key.id || !m.text) return;
    const choice = m.text.trim();
    
    if (choice === "1") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: botmenu
      }, { quoted:fcontact });
      } else if (choice === "2") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: ownermenu
      }, { quoted:fcontact });
      } else if (choice === "3") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: groupmenu
      }, { quoted:fcontact });
      } else if (choice === "4") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: funmenu
      }, { quoted:fcontact });
      } else if (choice === "5") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: reactmenu
      }, { quoted:fcontact });
      } else if (choice === "6") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: dlmenu
      }, { quoted:fcontact });
      } else if (choice === "7") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: groupmenu
      }, { quoted:fcontact });
      } else if (choice === "8") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: logomenu
      }, { quoted:fcontact });
      } else if (choice === "9") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: stickermenu
      }, { quoted:fcontact });
      } else if (choice === "10") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: audiomenu
      }, { quoted:fcontact });
      } else if (choice === "11") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: newsmenu
      }, { quoted:fcontact });
      } else if (choice === "12") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: economy
      }, { quoted:fcontact });
      } else if (choice === "13") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: animemenu
      }, { quoted:fcontact });
      } else if (choice === "14") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: nsfwmenu
      }, { quoted:fcontact });
      } else if (choice === "15") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: toolsmenu
      }, { quoted:fcontact });
      } else if (choice === "16") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: Aimenu
      }, { quoted:fcontact });
      } else if (choice === "17") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: religionmenu
      }, { quoted:fcontact });
      } else if (choice === "18") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: pluginmenu
      }, { quoted:fcontact });
      } else {
        m.reply('Invalid choice. Please reply with a valid number.');
      }
  
  };
  
  
  handler.help = ["play"];
  handler.tags = ["downloader"];
  handler.command = /^(اوامر)$/i;
  handler.limit = true;
  export default handler;
  
  
  
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
   }
   
   const more = String.fromCharCode(8206)
   const readMore = more.repeat(4001)
   
   function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
   }
   
   function clockStringP(ms) {
    let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
   }
   
   function ucapan() {
    const time = moment.tz("Asia/Damascus").format("HH")
    let res = "صباح الخير ☀️"
    if (time >= 4) {
     res = "صباح الخير 🌄"
    }
    if (time >= 10) {
     res = " نهارك سعيد☀️"
    }
    if (time >= 15) {
     res = "غروب جميل اليس كذلك🌇"
    }
    if (time >= 18) {
     res = "مساء الخير 🌙"
    }
    return res
   }
  
