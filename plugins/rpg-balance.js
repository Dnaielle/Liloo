const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`
┌───⊷ معلومات ⊶
▢ *الاسم:* ${name}
▢ *الالماس:* ${global.db.data.users[who].limit}💎
└──────────────
*ملاحظة:* 
*يمكنك شراء الماس باستخدام الأوامر*
❏ *${usedPrefix}شراء <cantidad>*
❏ *${usedPrefix}شراء2*`);
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'بال', 'diamond', 'balance'];
export default handler;
