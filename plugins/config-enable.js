let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `πππππ ππ ππππππππ`,
rows: [
{title: "β¨ | ππ΄π»π²πΎπΌπ΄", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π° π±πΈπ΄π½ππ΄π½πΈπ³π° π΄π½ π΄π» πΆπππΏπΎ", rowId: `${usedPrefix + command} welcome`},
{title: "π | πΌπΎπ³πΎ πΏππ±π»πΈπ²πΎ", description: "π΄π» π±πΎπ ππ΄ πππ΄π»ππ΄ π³π΄ πππΎ πΏππ±π»πΈπ²πΎ π/πΎ πΏππΈππ°π³πΎ", rowId: `${usedPrefix + command} public`},
{title: "π₯΅ | πΌπΎπ³πΎ π·πΎππ½π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ", rowId: `${usedPrefix + command} modohorny`},
{title: "π | π°π½ππΈπ»πΈπ½πΊ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ π΄π½π»π°π²π΄π π³π΄ πΆπππΏπΎπ π³π΄ ππ·π°πππ°πΏπΏ", rowId: `${usedPrefix + command} antilink`},   
{title: "π | π°π½ππΈπ»πΈπ½πΊ πΈ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ π΄π½π»π°π²π΄π πππ΄ πΈπ½πΈπ²πΈπ°π½ π΄π½ π·πππΏπ", rowId: `${usedPrefix + command} antilink2`},    
{title: "π | π³π΄ππ΄π²π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π°π π½πΎππΈπ΅πΈπ²π°π²πΈπΎπ½π΄π π³π΄ π½ππ΄ππ° πΌπΎπ³πΈπ΅πΈπ²π°π²πΈπΎπ½ π΄π½ ππ½ πΆπππΏπΎ", rowId: `${usedPrefix + command} detect`},      
{title: "β | ππ΄ππππΈπ²π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π°π ππ΄ππππΈπ²π²πΈπΎπ½π΄π πΏπ°ππ° ππ°π²π°π πΆπ΄π½ππ΄ π³π΄ πΆπππΏπΎπ", rowId: `${usedPrefix + command} restrict`},    
{title: "βοΈ | π°πππΎππ΄π°π³", description: "πΌπ°ππ²π° π°πππΎπΌπ°ππΈπ²π°πΌπ΄π½ππ΄ π»π°π π²πΎπ½ππ΄πππ°π²πΈπΎπ½π΄π π²πΎπΌπΎ π»π΄πΈπ³πΎ", rowId: `${usedPrefix + command} autoread`},
{title: "π | π°ππ³πΈπΎπ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»πΎπ π²πΎπΌπ°π½π³πΎπ π³π΄ π°ππ³πΈπΎπ ππΈπ½ πΏππ΄π΅πΈπΉπΎ", rowId: `${usedPrefix + command} audios`},
{title: "πΎ | π°πππΎπππΈπ²πΊπ΄π", description: "ππΎπ³π°π π»π°π πΈπΌπ°πΆπ΄π½π΄π, ππΈπ³π΄πΎπ πΎ π΄π½π»π°π²π΄π π΄π½ππΈπ°π³πΎπ ππ΄ π²πΎπ½ππ΄πππ΄π½ π΄π½ πππΈπ²πΊπ΄π", rowId: `${usedPrefix + command} autosticker`},
{title: "π¬ | πΏπ²πΎπ½π»π", description: "π΄π» π±πΎπ ππΎπ»πΎ ππ΄ππΏπΎπ½π³π΄ππ° π° π»πΎπ π²πΎπΌπ°π½π³πΎπ ππΈ π΄π ππ½ π²π·π°π πΏππΈππ°π³πΎ", rowId: `${usedPrefix + command} pconly`},
{title: "π’ | πΆπ²πΎπ½π»π", description: "π΄π» π±πΎπ ππΎπ»πΎ ππ΄ππΏπΎπ½π³π΄ππ° π° π»πΎπ π²πΎπΌπ°π½π³πΎπ ππΈ π΄π ππ½ πΆπππΏπΎ", rowId: `${usedPrefix + command} gconly`},
{title: "β | π°π½ππΈππΈπ΄ππΎπ½π²π΄", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ ππ΄π ππ½π° ππΎπ»π° ππ΄π", rowId: `${usedPrefix + command} antiviewonce`},
{title: "π΅ | π°π½ππΈπ»π»π°πΌπ°π³π°", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ π»π»π°πΌπ°π³π°", rowId: `${usedPrefix + command} anticall`},
{title: "π¬ | π°π½ππΈπΏππΈππ°π³πΎ", description: "π΄π» π±πΎπ π±π»πΎπππ΄π°ππ° π° π»πΎπ ππππ°ππΈπΎπ πππ΄ π»π΄ π·π°π±π»π΄π½ π°π» πΏππΈππ°π³πΎ", rowId: `${usedPrefix + command} antiprivado`},
{title: "π€¬ | π°π½ππΈππΎππΈπ²", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ πΌπ°π»π° πΏπ°π»π°π±ππ°", rowId: `${usedPrefix + command} antitoxic`},
{title: "πΈοΈ | π°π½ππΈπππ°π±π°π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ πππ°π±π°π", rowId: `${usedPrefix + command} antitraba`},
{title: "ππ» | π°π½ππΈπ°ππ°π±π΄π", description: "π°π» π΄π½ππΈπ°π πΌπ΄π½ππ°πΉπ΄ ππ½ π½ππΌπ΄ππΎ π°ππ°π±π΄, π΄π» π±πΎπ π»πΎ ππ°π²π°", rowId: `${usedPrefix + command} antiarabes`}, 
{title: "π€ | πΌπΎπ³π΄πΉπ°π³πΈπ±πΎπ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π²πΎπΌπ°π½π³πΎ πΏπ°ππ° πππ± π±πΎππ (#ππ΄ππ±πΎπ / #πΉπ°π³πΈπ±πΎπ)", rowId: `${usedPrefix + command} modejadibot`}, 
{title: "π | πΌπΎπ³πΎπ°π³πΌπΈπ½", description: "π΄π» π±πΎπ ππΎπ»πΎ ππ΄ππΏπΎπ½π³π΄ππ° π° π»πΎπ π°π³πΌπΈπ½π π³π΄π» πΆπππΏπΎ", rowId: `${usedPrefix + command} modoadmin`},    
]}, ]
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `non trovato`,
title: null,
}

let isEnable = /true|Attiva|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'benvenuto':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antielimina':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilinkhttps':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'soloprivato':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'sologruppo':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivato':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'antitrava':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antipaki':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return 
throw false
}
conn.sendButton(m.chat, `${type} ${isEnable ? 'attivato' : 'disattivato'} con successo`, wm2, null, [[`${isEnable ? 'disattiva' : 'attiva'}`, `${isEnable ? `.0 ${type}` : `.1 ${type}`}`]], m)}
handler.help = ['attiva', 'disabilita'].map(v => v + '<option>')
handler.tags = ['group', 'owner']
handler.command = /^((attiva|disabilita)|(turn)?[01])$/i
export default handler
