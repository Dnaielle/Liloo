import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

/* Si quieres modificar esto y agregar mas APIs asegurate poner global.tuapiname = ['apikey'] */ /* By Skid 🤑 */

global.openai_key = 'sk-0';
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'org-3';
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */


global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.APIs = {
  ApiEmpire: 'https://api-brunosobrino.zipponodes.xyz',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};

/** ************************/
global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      level: '🧬 المستوى',
      limit: '💎 حد',
      exp: '⚡ الخبرة',
      bank: '🏦 البنك',
      diamond: '💎 الماس',
      health: '❤️ الصحة',
      kyubi: '🌀 السحر',
      joincount: ' 🟢توكين',
      credit: '🪙 ذهب',
      stamina: '✨ الطاقة',
      role: '💪 الرتبة',
      premium: '🎟️ مميز',
      pointxp: '📧 نقاط الخبرة',
      gold: '💵 نقاط',
      trash: '🗑 القمامة',
      crystal: '🔮 الكريستال',
      intelligence: '🧠 ذكاء',
      string: '🕸️ حبل',
      keygold: '🔑 مفتاح ذهبي',
      keyiron: '🗝️ مقتاح حديدي',
      emas: '🪅 بيناتا',
      fishingrod: '🎣 عصا',
      gems: '🍀 العاب',
      magicwand: '⚕️ العصا السحرية',
      mana: '🪄 الطاقة السحرية',
      agility: '🤸‍♂️ اللياقة',
      darkcrystal: '♠️ كريستال اسود',
      iron: '⛓️ حديد',
      rock: '🪨 حجر',
      potion: '🥤 مشروب',
      superior: '💼 راقي',
      robo: '🚔 سارق',
      upgrader: '🧰 زيادة تحسين',
      wood: '🪵 خشب',
      strength: '🦹‍ ♀️ قوة',
      arc: '🏹 قَوس',
      armor: '🥼 درع',
      bow: '🏹 فوس خارق',
      pickaxe: '⛏️ منقار',
      sword: '⚔️ سيف',
      common: '📦 الصندوق الغامض',
      uncoommon: '🥡 صندوق غير شائع',
      mythic: '🗳️ الصندوق الاسطوري المميز',
      legendary: '🎁 الصندوق الأسطوري',
      petFood: '🍖 طعام الحيوانات الاليفة',
      pet: '🍱 صندوق الحيوانات الأليفة',
      bibitanggur: '🍇 بذور العنب',
      bibitapel: '🍎 بذور التفاح',
      bibitjeruk: '🍊 بذور الليمون',
      bibitmangga: '🥭 بذور المنجى',
      bibitpisang: '🍌 بذور الموز',
      ayam: '🐓 ديك',
      babi: '🐖 خنزير',
      Jabali: '🐗 خنزير بري',
      bull: '🐃 ثور',
      buaya: '🐊 تمساح',
      cat: '🐈 قطة',
      centaur: '🐐 ماعز',
      chicken: '🐓 دجاجة',
      cow: '🐄 بقرة',
      dog: '🐕 كلب',
      dragon: '🐉 تنين',
      elephant: '🐘 فيل',
      fox: '🦊 ثعلب',
      giraffe: '🦒 زرافة',
      griffin: '🦅 صقر',
      horse: '🐎 حصام',
      kambing: '🐐 ماعز جبلي',
      kerbau: '🐃 ثور',
      lion: '🦁 اسد',
      money: '👾 عملات غوجو',
      monyet: '🐒 قرد',
      panda: '🐼 باندا',
      snake: '🐍 ثعبان',
      phonix: '🕊️ عنقاء',
      rhinoceros: '🦏 وحيد القرن',
      wolf: '🐺 ذئب',
      tiger: '🐅 نمر',
      cumi: '🦑 أخطبوط',
      udang: '🦐 روبيان',
      ikan: '🐟 سمكة',
      fideos: '🍝 طعام',
      ramuan: '🧪 مكون نوفا',
      knife: '🔪 سكين',
    };
    const results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }};
global.rpgg = { // Solo emojis
  emoticon(string) {
    string = string.toLowerCase();
    const emott = {
      level: '🧬',
      limit: '💎',
      exp: '⚡',
      bank: '🏦',
      diamond: '💎+',
      health: '❤️',
      kyubi: '🌀',
      joincount: '🟢',
      credit: '🪙',
      stamina: '✨',
      role: '💪',
      premium: '🎟️',
      pointxp: '📧',
      gold: '💵',
      trash: '🗑',
      crystal: '🔮',
      intelligence: '🧠',
      string: '🕸️',
      keygold: '🔑',
      keyiron: '🗝️',
      emas: '🪅',
      fishingrod: '🎣',
      gems: '🍀',
      magicwand: '⚕️',
      mana: '🪄',
      agility: '🤸‍♂️',
      darkcrystal: '♠️',
      iron: '⛓️',
      rock: '🪨',
      potion: '🥤',
      superior: '💼',
      robo: '🚔',
      upgrader: '🧰',
      wood: '🪵',
      strength: '🦹‍ ♀️',
      arc: '🏹',
      armor: '🥼',
      bow: '🏹',
      pickaxe: '⛏️',
      sword: '⚔️',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      legendary: '🎁',
      petFood: '🍖',
      pet: '🍱',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      ayam: '🐓',
      babi: '🐖',
      Jabali: '🐗',
      bull: '🐃',
      buaya: '🐊',
      cat: '🐈',
      centaur: '🐐',
      chicken: '🐓',
      cow: '🐄',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      fox: '🦊',
      giraffe: '🦒',
      griffin: '🦅',
      horse: '🐎',
      kambing: '🐐',
      kerbau: '🐃',
      lion: '🦁',
      money: '👾',
      monyet: '🐒',
      panda: '🐼',
      snake: '🐍',
      phonix: '🕊️',
      rhinoceros: '🦏',
      wolf: '🐺',
      tiger: '🐅',
      cumi: '🦑',
      udang: '🦐',
      ikan: '🐟',
      fideos: '🍝',
      ramuan: '🧪',
      knife: '🔪',
    };
    const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }};
global.rpgshop = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emottt = {
      exp: '⚡ الخبرة',
      limit: '💎 حد',
      diamond: '💎 الماس',
      joincount: '🟢 توكين',
      credit: '🪙 ذهب',
      berlian: '♦️ جوهرة',
      kyubi: '🌀 سحر',
      gold: '💵 ذهب',
      money: '👾 عملات غوجو',
      tiketcoin: '🎫 تذاكر غوجو',
      stamina: '✨ طاقة',
      potion: '🥤 مشروب',
      aqua: '💧 مياه',
      trash: '🗑 قمامة',
      wood: '🪵 خشب',
      rock: '🪨 حجر',
      batu: '🥌 حجر مميز',
      string: '🕸️ حبل',
      iron: '⛓️ حددي',
      coal: '⚱️ فحم',
      botol: '🍶 زجاجة',
      kaleng: '🥫 الاستطاعة',
      kardus: '🪧 كرتون',
      eleksirb: '💡 كهرباء',
      emasbatang: '〽️ سبيكة ذهب',
      emasbiasa: '🧭 بوصلة',
      rubah: '🦊🌫️ الثعلب الكبير',
      sampah: '🗑🌫️ قمامة خارقة',
      serigala: '🐺🌫️ ذئب كبير',
      kayu: '🛷 خشب خارق',
      sword: '⚔️ سيف',
      umpan: '🪱 دودة',
      healtmonster: '💵 التذاكر',
      emas: '🪅 بينياتا',
      pancingan: '🪝 طعم',
      pancing: '🎣 سنارة صيد',
      common: '📦 صندوق',
      uncoommon: '🥡 صندوق عادي',
      mythic: '🗳️ صندوق مميز',
      pet: '📫 صندوق الحيوانات الأليفة', // ?
      gardenboxs: '💐 صندوق النبات', // ?
      legendary: '🎁 صندوق اسطوري',
      anggur: '🍇 عنب',
      apel: '🍎 تقاح',
      jeruk: '🍊 ليمون',
      mangga: '🥭 منجى',
      pisang: '🍌 موز',
      bibitanggur: '🌾🍇 بذور عنب',
      bibitapel: '🌾🍎 بذور تفاح',
      bibitjeruk: '🌾🍊 بذور ليمون',
      bibitmangga: '🌾🥭 بذور منجى',
      bibitpisang: '🌾🍌 بذور موز',
      centaur: '🐐 القنطور',
      griffin: '🦅 صقر',
      kucing: '🐈 قطة',
      naga: '🐉 تنين',
      fox: '🦊 ثعلب',
      kuda: '🐎 حصان',
      phonix: '🕊️ عنقاء',
      wolf: '🐺 ثعلب',
      anjing: '🐶 كلب',
      petFood: '🍖 طعام الحيوانات الاليفة', // ?
      makanancentaur: '🐐🥩 غذاء القنطور',
      makanangriffin: '🦅🥩 غذاء الصقر',
      makanankyubi: '🌀🥩 غذاء سحري',
      makanannaga: '🐉🥩 غذاء التنين',
      makananpet: '🍱🥩 غذاء حيوانات',
      makananphonix: '🕊️🥩 غذاء عنقاء',
    };
    const results = Object.keys(emottt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }};
global.rpgshopp = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emotttt = {
      exp: '⚡',
      limit: '💎',
      diamond: '💎+',
      joincount: '🟢',
      credit: '🪙',
      berlian: '♦️',
      kyubi: '🌀',
      gold: '💵',
      money: '👾',
      tiketcoin: '🎫',
      stamina: '✨',
      potion: '🥤',
      aqua: '💧',
      trash: '🗑',
      wood: '🪵',
      rock: '🪨',
      batu: '🥌',
      string: '🕸️',
      iron: '⛓️',
      coal: '⚱️',
      botol: '🍶',
      kaleng: '🥫',
      kardus: '🪧',
      eleksirb: '💡',
      emasbatang: '〽️',
      emasbiasa: '🧭',
      rubah: '🦊🌫️',
      sampah: '🗑🌫️',
      serigala: '🐺🌫️',
      kayu: '🛷',
      sword: '⚔️',
      umpan: '🪱',
      healtmonster: '💵',
      emas: '🪅',
      pancingan: '🪝',
      pancing: '🎣',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      pet: '📫', // ?
      gardenboxs: '💐', // ?
      legendary: '🎁',
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      mangga: '🥭',
      pisang: '🍌',
      bibitanggur: '🌾🍇',
      bibitapel: '🌾🍎',
      bibitjeruk: '🌾🍊',
      bibitmangga: '🌾🥭',
      bibitpisang: '🌾🍌',
      centaur: '🐐',
      griffin: '🦅',
      kucing: '🐈',
      naga: '🐉',
      fox: '🦊',
      kuda: '🐎',
      phonix: '🕊️',
      wolf: '🐺',
      anjing: '🐶',
      petFood: '🍖', // ?
      makanancentaur: '🐐🥩',
      makanangriffin: '🦅🥩',
      makanankyubi: '🌀🥩',
      makanannaga: '🐉🥩',
      makananpet: '🍱🥩',
      makananphonix: '🕊️🥩',
    };
    const results = Object.keys(emotttt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }};

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'api.js\''));
  import(`${file}?update=${Date.now()}`);
});
