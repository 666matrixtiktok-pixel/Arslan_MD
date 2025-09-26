const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BBWjZWOE9vTkJwRkhJSGFZQkEwdnM5NHV2ZmEwUjhCRDQvS2VTdXpYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXZXZytsTWVOUy95Z0Z5U1FNbkdvejF0elpVZXNGVVpCZUFQQklyem1nQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTmpMaWFERG5aYkE1WGZaUkx1enNOaUU2ZStZUFZoSENyTDBpbUl4NkZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQkhDVmhCZjdVTFNHazQxTjlnYmtSZEVqMkdsSGpMSWwybW5mZUdSZGc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNamlENnlPSVpmbGp2SWo2RlRVOEN2TXBuWVd3U0E4YnJvREF2ZWFaMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc0dXorUkEzakQ3RmlTL1U2TTloUHp4ZG5CR1Y5NUlRR0tKVzRHWVFxQW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZ4d3FKVHF4NE5Jb3NqZERaaDgrbjVoRjd5SUptc3hGZnRjK0hIVGRWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3FobXcvWmE0aUl3SitWdmxRWjUwcENtMHdFdkQrLy9IM2lyaDdYbndTcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpWYVRscXNORGtXTWszVTJQc1RNR3Z1ZVd6ODVZZitrc1pvWUM2Q2xBTFpHUzlnM01SdHF1em9KZmdhVEYrTmdodkRaeHdLY2l5QjVHWEovSHBlNmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJoekhqZ05QWmIyOGRYd250aCs3QnNkN2VnMXM2N1ZrLytzeTk2UXRwT0FFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjMxOTcwMTA1MjU0MzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNEMTRCODZFMEQzQUUwQ0Q1Nzc4NzZDNjkzQUEyQ0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODg4ODM5MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMzE5NzAxMDUyNTQzMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzM2NEM0NjkxNkQ4QkM1ODM1QUI4MDAyQzgxMEQxMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4ODg4MzkxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIzMTk3MDEwNTI1NDMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNkI3QkMzQUJGQzZEMDQyNDY1Q0EwQTMwNzNDN0FGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTg4ODgzOTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkhQUTRKUUVXIiwibWUiOnsiaWQiOiIzMTk3MDEwNTI1NDMxOjNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjkwODg4OTUwNDU3OTc6M0BsaWQiLCJuYW1lIjoi8J2QhPCdn5Eg8J2QgPCdkIfwnZCM8J2QiPCdkIgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ052VnZOUURFTUdEMnNZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNUUEhmV3d0L0ZyZExOQXhDdGEzNVhPd2lxNzBqU0gzM2orLzBCMnJNbW89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRVS0paTmVBd3RIcnRnQlAxeUZ3MDNiOGNpbWtMMDFWd0tGNC8yd0RpaDNNNFQ3ZC81bjJobWxaWXJzQkhpaHA5ZDF2TXNOZjE2YURYcCtsemFWZURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvdVhEM29xMEg2N2Jpa3BFOGpEcTB4Uk5XaTRBUTUwVHlMa29LeFNGdU1RbkdLVGZ3TlVvYjZndFh5V1p0S0lxeGhjbnVxMTBhMEVQa2F0V040ZnRpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjMxOTcwMTA1MjU0MzE6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVa3p4MzFzTGZ4YTNTelFNUXJXdCtWenNJcXU5STBoOTk0L3Y5QWRxekpxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg4ODgzODksImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPYVEifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY E3 AHMII☠️⚜️🔥*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
