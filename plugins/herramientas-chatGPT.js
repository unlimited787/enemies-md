import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix , command }) => {
if (!text) throw `fammi una domanda\n\nāā esempio\nā ${usedPrefix + command} che ne pensi dell'amore?\nā ${usedPrefix + command}`
try {
m.reply('ci sto pensando')
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `non ho capito`
}}
handler.command = /^(zio)$/i
export default handler
