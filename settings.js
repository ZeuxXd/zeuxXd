//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
    alfa: 'https://api.zeeoneofc.xyz',  
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': '18a269a07a59',
	'https://api.zeeoneofc.xyz': 'jBciBSrM',
}

//customize settings\\
global.owner = ['6287890620694','6285951725163','6285924761802']
global.premium = ['6285924761802']
global.ownernomer = '6285924761802'
global.ownername = 'JoJo -XD𒈒'
global.botname = '𝐙 𝐄 𝐔 𝐗 - 𝖡𝖮𝖳㊋'
global.footer = '𝐙 𝐄 𝐔 𝐗 - 𝖡𝖮𝖳㊋ By JoJo -XD𒈒'
global.ig = 'https://Instagram.com/jojo_wibu'
global.wa = 'https://wa.me/6287890620694'
global.region = 'Indonesia, Sumatra Utara, Medan'
global.sc = 'https://www.nekopoi.care/ks19ybs'
global.myweb = 'https://github.com/zyy7'
global.packname = 'Buatan Siapa? Buatan JoJo\nMau nomor nya? +62 878-9062-0694\nOrangnya ganteng dan baik\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = '𝐙 𝐄 𝐔 𝐗 - 𝖡𝖮𝖳㊋'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'Fitur Ini Khusus Admin GROUP!!',
    botAdmin: 'Jadiin BOT Admin Lah Kakak T_T!',
    owner: 'Fitur Ini Khusus OWNER BOT TERGANTENG 😎',
    group: 'Fitur Ini Hanya Untuk GROUP!!',
    private: 'Fitur Ini Hanya Bisa DiGunakan Di Private Chat/PC!!',
    bot: 'Fitur Tersebut Hanya Bisa Digunakan BOT',
    wait: '_⏳ In Process..._',
    error: 'Error! Seperti Nya ApikeyNya Error Atau Sudah Kadaluarsa🤔!',
    endLimit: 'LIMIT Kamu Sudah Habis!!, Limit Akan Direset Pukul 12 Malam',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
