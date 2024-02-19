import { Sticker } from 'wa-sticker-formatter'

let handler = async (m, { conn }) => {
  
  let vid = 'https://telegra.ph/file/d5c478b362a000e600c75.mp4';
  let stiker = await createSticker(false, vid, '', author, 20)
  
  m.reply(stiker)
};
handler.customPrefix = /^(فزت|ربحت|فازت|ارقص|هز)$/i;
handler.command = new RegExp;

export default handler;

async function createSticker(vid, url, packName, authorName, quality) {
  let stickerMetadata = { type: 'full', pack: packName, author: authorName, quality }
  return (new Sticker(vid ? vid : url, stickerMetadata)).toBuffer()
}
