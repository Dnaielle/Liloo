import { Sticker } from 'wa-sticker-formatter'

let handler = async (m, { conn }) => {
  
  let img = 'https://telegra.ph/file/61052aa9fa8972ffd9762.png';
  let stiker = await createSticker(false, img, '', author, 20)
  
  m.reply(stiker)
};
handler.customPrefix = /^(دز)$/i;
handler.command = new RegExp;

export default handler;

async function createSticker(img, url, packName, authorName, quality) {
  let stickerMetadata = { type: 'full', pack: packName, author: authorName, quality }
  return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}
