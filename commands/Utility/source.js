'use strict';

export default {
    views: ['source'],
    command: /^source$/i, //another command.
    description: 'Sorce code this bot',
    usage: '',
    execute: ({ xcoders, m, x  }) => {
        return xcoders.requestPaymentMenu(m.chat, '```https://github.com/Fxc7/baileys-bot-md```', { quoted: x });
    }
}
