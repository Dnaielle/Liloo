import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw '✳️ ماذا تريد البحث عليه في اليوتيوب?';

  try {
    const query = encodeURIComponent(text);
    const response = await axios.get(`https://weeb-api.vercel.app/ytsearch?query=${query}`);
    const results = response.data;

    if (results.length === 0) {
      throw 'لم استطع ايجاد شيء.';
    }

    const firstResult = results[0];

    const message = `
乂 ${firstResult.title}
乂 *الرابط* : ${firstResult.url}
乂 *الوصف* : ${firstResult.timestamp}
乂 *تم نشره :* ${firstResult.ago}
乂 *مشاهدات:* ${firstResult.views}

    `;

    conn.sendFile(m.chat, firstResult.thumbnail, 'yts.jpeg', message, m);
  } catch (error) {
    console.error(error);
    throw 'خطأ في البحث عن المقطع.';
  }
};

handler.help = ['ytsearch'];
handler.tags = ['downloader'];
handler.command = ['بحث', 'yts'];

export default handler;
