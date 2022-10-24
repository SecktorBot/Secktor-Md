const { runtime,tlang,botpic } = require('../../lib/')
const Config = require('../../config')
const prefix = Config.prefix
const speed = require('performance-now')

module.exports = {
    name: 'status',
    category: 'general',
    desc: 'Sends system information of Bot.',
    async exec(citel, Void,args) {
			const dbut = [
				{
					buttonId: `${prefix}help`,
					buttonText: {
						displayText: "Menu",
					},
					type: 1,
            },

				{
					buttonId: `${prefix}rank`,
					buttonText: {
						displayText: "Rank",
					},
					type: 1,
            },
          ];
			const uptime = process.uptime();
			timestampe = speed();
			latensie = speed() - timestampe;
			let ter = `
 🔰 *${tlang().title}* 🔰
*🌟الوصف:* واتساب بوت ب مميزات كثيره, اصنع في NodeJs لصنع وتساب enjoyable.
*♥️قروب الدعم , https://chat.whatsapp.com/IJnyOohnm2Y9F6MWgruFj5.
*⚡السرعه:* ${latensie.toFixed(4)} ms
*🚦مده التشغيل:* ${runtime(process.uptime())}
*🕸الاصدار:* 1.0.0
*👤المطور:*  ${Config.ownername}
*تم تطويره بواسطه ${tlang().title}*
`;
			let buttonMessaged = {
				image: {
					url: await botpic(),
				},
				caption: ter,
				footer: tlang().footer,
				buttons: dbut,
				headerType: 4,
				contextInfo: {
					externalAdReply: {
						title: tlang().title,
						body: `Bot-Status`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: ``,
						sourceUrl: ``,
					},
				},
			};
			await Void.sendMessage(citel.chat, buttonMessaged, {
				quoted: citel,
			});
 
    }
 }
