/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['62895327999292']
global.ownernomer = "62895327999292"
global.premium = ['62895327999292']
global.packname = 'WannTrue BOTZ'
global.author = 'WannTrue'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done kontol',
    admin: 'Lu bukan admin ngentod!',
    botAdmin: 'Gw bukan admin anj!',
    premime: 'Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Lu bukan owner gw setan',
    group: 'Cuma group dek!',
    private: 'Hanya Untuk Private Chat!',
    bot: 'Khusus Pengguna Nomor Bot',
    wait: '_*MOHON MENUNGGU YA KONTOL*_',
    endLimit: 'Limit Harian Lu Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./image/naze.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
