const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const bot = new Discord.Client({
    token: auth.token,
    autorun: true,
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    bot.setPresence({
        game : {
            name : "Dark Rituals & Sinister Summonings"
        }
    });
});


/*
Bot checking for messages that s
 */

bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) === '!') {

        let args = message.substring(1).split(' ');
        let cmd = args[0];

        args = args.splice(1);
        switch (cmd) {

            case 'ping':
                switch (getRandomNumber(1, 11)) {

                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        bot.sendMessage({
                        to: channelID,
                        message: 'Pong!'
                        });
                    break;
                    case 10:
                        bot.sendMessage({
                            to: channelID,
                            message: 'Fuck off, ' + user + '.'
                        });
                    break;
                }
                // bot.sendMessage({
                //     to: channelID,
                //     message: 'Fuck off, ' + user + '.'
                // });
            break;
            // Youri's Functie
            case 'Omae_wa_mou_shindeiru':
                bot.sendMessage({
                    to: channelID,
                    message: 'NANI!?!?!?!?!?!'
                });
                break;
            case 'd20':
                bot.sendMessage({
                    to: channelID,
                    message: 'Rolling a d20...',
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'The dice has rolled! Result: ' + getRandomNumber(1, 21),
                    typing: true
                });
                break;
            case 'd6':
                bot.sendMessage({
                    to: channelID,
                    message: 'Rolling a d6...'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'The dice has rolled! Result: ' + getRandomNumber(1, 7),
                    typing: true
                });
                break;
            case 'd4':
                bot.sendMessage({
                    to: channelID,
                    message: 'Rolling a d4...',
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'The dice has rolled! Result: ' + getRandomNumber(1, 5),
                    typing: true
                });
                break;
            case 'd8':
                bot.sendMessage({
                    to: channelID,
                    message: 'Rolling a d8...'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'The dice has rolled! Result: ' + getRandomNumber(1, 9),
                    typing: true
                });
                break;
            case 'd10':
                bot.sendMessage({
                    to: channelID,
                    message: 'The dice has rolled! Result: ' + getRandomNumber(1, 11),
                    typing: true
                });
                break;
            case 'd12':
                bot.sendMessage({
                    to: channelID,
                    message: 'Rolling a d12...'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'The dice has rolled! Result: ' + getRandomNumber(1, 13),
                    typing: true
                });
                break;
            case 'roll':
                bot.sendMessage({
                    to: channelID,
                    message: 'Rolling a random number between 1 - 100'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'I rolled ' + getRandomNumber(1, 101),
                    typing: true
                });
                break;
            // Dion's Functie
            case 'truth':
                bot.sendMessage({
                    to: channelID,
                    message: 'Dion is very cool'
                });
                break;
            case 'meaningoflife':
                bot.sendMessage({
            // Gibus' functie
                    to: channelID,
                    message: '42'
                });
                break;
            // Stefan's Functie
            case 'stefan':
                bot.sendMessage({
                    to: channelID,
                    message: 'Stefan is de coolste persoon op de wereld.',
                    typing: true
                });
                break;
            case 'niko':
                bot.sendMessage({
                    to: channelID,
                    message: 'Summoning an aspect of Niko...'
                });
                bot.uploadFile({
                    to: channelID,
                    file: "images/1484600049_niko.gif"
                });
                break;
        }
    }

    if (message.match(/^warlock/i)) {
        if (userID === "256131905462730752") {
            bot.sendMessage({
                to: channelID,
                message: "Stefan, you called?",
                typing: true
            })
        } else if (userID === "197416203441012739") {
            bot.sendMessage({
                to: channelID,
                message: "Master, you called? I'm at your service.",
                typing: true
            })
        } else {
            switch (getRandomNumber(1, 5)) {

                case 1:
                    bot.sendMessage({
                        to: channelID,
                        message: "What!? Someone called me? I don't have time for you!",
                        typing: true
                    });
                    break;
                case 2:
                    bot.sendMessage({
                        to: channelID,
                        message: "Stop bothering me " + user + ", can't you see I'm busy!",
                        typing: true
                    });
                    break;
                case 3:
                    bot.sendMessage({
                        to: channelID,
                        message: "Did someone say my name? I'm trying to summon demons here!",
                        typing: true
                    });
                    break;
                case 4:
                    bot.sendMessage({
                        to: channelID,
                        message: "Urgh! I'm trying to concentrate here! Silence " + user + "!",
                        typing: true
                    });
                    break;
            }
        }

        logger.info(bot.username + ' (' + bot.id + ') ' + 'Replied to a message successfully.');
    }

    if (message.match(/daan/i)) {
        bot.sendMessage({
            to: channelID,
            message: "Did someone mention quite an excelent trap?"
        })
    }

    if (userID !== "368391262652334080") {
        if (message.match(/loli/i)) {
            bot.sendMessage({
                to: channelID,
                message: "Out of all the things to mention, you mention... that... *thing*..."
            });
        }

    }

    if (message.match(/suck a duck/i)) {
        bot.sendMessage({
            to: channelID,
            message: "Oh come on! Just say Suck a dick!"
        })
    }

    if (message.match(/^omae\s{0,}wa\s{0,}mou\s{0,}shindeiru\s{0,}$/i)){
        bot.sendMessage({
            to: channelID,
            message: 'NANI!?!?!?!?!?!'
        });
    }
});
