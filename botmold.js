/*
THIS IS THE MOLD FOR WARLOCK BOT.
 */

const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');
const info = require('./package.json');
const users = require('./users.json');

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

bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) === '!') {

        let args = message.substring(1).split(' ');
        let cmd = args[0];

        args = args.splice(1);
        switch (cmd) {

            // Custom dice function
            case 'd':
                if (!isNaN(args[0])) {
                    bot.sendMessage({
                        to: channelID,
                        message: "Rolling a custom d" + args[0]
                    });

                    let numtoroll = parseInt(args[0]) + 1;

                    bot.sendMessage({
                        to: channelID,
                        message: "The dice has rolled! Result: " + getRandomNumber(1, numtoroll),
                        typing: true
                    })
                } else if (typeof args[1] !== 'undefined') {
                    bot.sendMessage({
                        to: channelID,
                        message: "I only need one argument: `!d [number]`."
                    })
                } else if (typeof args[0] === 'undefined') {
                    bot.sendMessage({
                        to: channelID,
                        message: "I need a max number: `!d [number]`."
                    })
                } else {
                    bot.sendMessage({
                        to: channelID,
                        message: "Erm, I can only roll numbers I'm afraid: `!d [number]`."
                    });
                }
                break;

            // Music Function (WIP)
            case 'play':
            case 'p':
                bot.joinVoiceChannel(channelID, function(error, events) {

                    if (error) return logger.error(error);

                    bot.sendMessage({
                        to: channelID,
                        message: "Bot should play something here, still wip"
                    })


                });
            break;
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
                bot.sendMessage({
                    to: users.requsers.stefan.id,
                    message: user + ' heeft !stefan gebruikt. Nog iemand weet dus dat jij cool bent.'
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
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: "Check your private messages, <@!" + userID + ">!"
                });
                bot.sendMessage({
                    to: userID,
                    message: '```\n' +
                    'Here\'s a list of all currently existing commands. \n' +
                    'Any suggestions? Please send them to info@geertsoetens.nl \n' +
                    '\n' +
                    '!ping              -   Ping the bot, he\'ll reply with pong.\n' +
                    '!d20               -   Generate a number 1-20.\n' +
                    '!d6                -   Generate a number 1-6.\n' +
                    '!d4                -   Generate a number 1-4.\n' +
                    '!d8                -   Generate a number 1-8.\n' +
                    '!d10               -   Generate a number 1-10.\n' +
                    '!d12               -   Generate a number 1-12.\n' +
                    '!roll              -   Roll a random number between 1-100\n' +
                    '\n' +
                    'To roll a custom dice:\n' +
                    '!d [number]        -   Roll a dice, number = max.\n' +
                    '\n' +
                    '!truth             -   Function added for a friend.\n' +
                    '!meaningoflife     -   Function added for a friend, replies with the meaning of life.\n' +
                    '!stefan            -   Function added for a friend.\n' +
                    '!niko              -   You gotta try this one out.\n' +
                    '!info              -   Misc info about WARLOCK & contact info.' +
                    '```'
                });
                break;
            case 'info':
                bot.sendMessage({
                   to: channelID,
                   message: "Info has been sent to you privately! <@!" + userID + "> !"
                });
                bot.sendMessage({
                    to: userID,
                    message: "```\n" +
                    "WARLOCK ver: " + info.version + "\n" +
                    "Developed by: " + info.author + "\n" +
                    "Description: " + info.description + "\n" +
                    "For more info, please visit: http://geertsoetens.nl.\n" +
                    "For any questions & suggestions, please e-mail:\n" +
                    "       info@geertsoetens.nl\n" +
                    "I hope you enjoy warlock bot, feel free to contact me!\n" +
                    "```"
                });
                break;
            default:
                bot.sendMessage({
                    to: channelID,
                    message: 'I\'m sorry, I didn\'t understand that. Maybe your capitalization was wrong? or type !help for a list of commands.'
                })
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

        // logger.info(bot.username + ' - (' + bot.id + ') ' + 'Replied to a message successfully.');
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

    if (message.match(/fuck\s*you\s*warlock/i)) {
        bot.sendMessage({
            to: channelID,
            message: 'Woa bro, no need to get violent...'
        });
        if (userID !== "197416203441012739") {
            bot.sendMessage({
                to: userID,
                message: 'Alright listen here you little shit, you dare insult me? I\'m motherfucking WARLOCK! I summon fucking demons for a living. And you think you got a chance? Kid... Please.'
            });
        } else {
            bot.sendMessage({
                to: userID,
                message: 'Mawstew, pwease down\'t huwt my feewings :\'('
            })
        }
        logger.warn(bot.username + " - (" + bot.id + ") " + "Has just been insulted, and has insulted the user back.");
        logger.warn("// START ORIGINAL MESSAGE //");
        logger.warn(user + ": " + message);
        logger.warn("// END ORIGINAL MESSAGE //");
    }
});