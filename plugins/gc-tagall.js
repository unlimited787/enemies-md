let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `${pesan}`
let teks = `ð¡ï¸âð´ââ  ðvÍ¤ÎGLðð ð¡ï¸âð´ââ \n\n ${oi}\n\n`
for (let mem of participants) {
teks += `ââ­ @${mem.id.split('@')[0]}\n`}
teks += ``
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|marcar|todos|invocaciÃ³n)$/i
handler.admin = true
handler.group = true
export default handler
