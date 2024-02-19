import similarity from 'similarity';
const threshold = 0.72;
let handler = m => m;
handler.before = async function (m) {
    let id = m.chat;
    
    this.tekateki = this.tekateki ? this.tekateki : {};
    if (!(id in this.tekateki)) return; 

    let json = this.tekateki[id][1]; 
    if (m.text.toLowerCase().trim() === json.response.toLowerCase().trim()) {
        
        global.db.data.users[m.sender].exp += this.tekateki[id][2];
        m.reply(`*❐┃اجـابـة صـحـيـحـة┃✅ ❯*`);
        clearTimeout(this.tekateki[id][3]); 
        delete this.tekateki[id]; 
    } 
    return true;
};

handler.exp = 0;

export default handler;
