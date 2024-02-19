const xpperlimit = 10;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^شراء3/i, '');
  count = count ? /الكل/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].credit += count;
    conn.reply(m.chat, `
┌─「 الدفع 」
⌯ الكيمة : + ${count}🪙
⌯ الخبرة : -${xpperlimit * count} XP
└──────────────`, m);
  } else conn.reply(m.chat, `[❣️]~ هههه إنت مفلس خبرة عشان تشتري ${count} ذهب🪙 توقعت ذلك `, m);
};
handler.help = ['S H A D O W'];
handler.tags = ['S H A D O W'];
handler.command = ['شراء3', 'شراءالكل'];

handler.disabled = false;

export default handler;