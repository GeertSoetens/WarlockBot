/* This file is an example, for the lazy of you you're allowed to use this, copy it, and fill in the blanks.
for the more creative, feel free to use this as a sort of mold for your project! */
const Discord = require('discord.io'); //Fetch the Discord.io library
const logger = require('winston'); //Fetch the console logger
const auth = require('./auth.json'); //Fetch the discord bots AUTH key.

/* Putting the AUTH key in a different file is not required, but reccomended.
You could simply put the AUTH key in a const like this:

const auth = [authkey]

KEEP IN MIND! ANYONE WITH YOUR BOTS AUTH KEY BASICALLY OWNS YOUR BOT

Set up the logger, this doesn't have much to do with discords bot at all.
But it makes the console look fancy */
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});

logger.level = 'debug';

/*  Now, let's create a function that'll be useful to us later.
This is basic JS, so I assume you know what this does.
*/

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/* It basically generates a random number, as the title implies. It'll be useful
when you want the bot to respond randomly.

Let's finally create the bot itself. This is often called the "bot" or "client"
in online documentation. I'm going to call it bot.*/

const bot = new Discord.Client({
  token: auth.token, // Remember! This depends on how you decided to implement your auth token.
  autorun: true,
});

/* The bot object now exists, time to get it to do something!
First I want the bot to do a few things when it says it's ready and loaded */

bot.on('ready', function (evt) {
  logger.info('Connected'); //The logger writes "Connected" to the console.
  logger.info('Logged in as: '); //You can figure out what this does
  logger.info(bot.username + ' - (' + bot.id + ')');
  // Here the logger writes the bots username and it's ID to the console.
  // It's mostly useless, but it sure looks good and professional!

  // Now it's time for the bot to do something really cool
  bot.setPresence({
    game: {
      name: "The bot will display anything you put here as [name] is playing: [gamename]!"
    }
  });
  /* The bot now set its so called 'presence' to playing a game, and the 'name'
  will be displayed as "Is playing" or "Speelt" with the game's name that you set
  following that.
  */
});

// Now we'll tell the bot to start listening to messages

bot.on('message', function (user, userID, channelID, message, evt) {
  /* when a bot reads a message, it also reads the users name, id and the
  channels ID. These will be useful later. */

  // We'll now tell the bot to see if a message starts with !
  // In discord, ! usually means a bot command.

  if (message.substring(0, 1) === '!') {

    let args = message.substring(1).split(' ');
    let cmd = args[0];

    args = args.splice(1);
    switch (cmd) {

      // Make your bot reply to Ping with Pong!
      // This is usually the first function you write. You're basically pinging the bot
      // seeing if it works.
      case 'ping':
        bot.sendMessage({
          to: channelID,
          message: 'Pong!'
        });
      break;
      // You can add more cases down here, for example:
      case 'orange':
      // So, if someone writes !orange
        bot.sendMessage({
          to: channelID,
          // To channel message was sent from
          message: 'Orange is an ugly color.',
          // Send a string to said channel.
          // There's a few extra attributes you can add to these messages
          typing: true
          // This makes the bot act like it's typing the message. Be warned though,
          // the bot is a slow writer
        })
    }
  }

  // Now let's make our bot reply to a message with a randomly selected message.

  if (message.match(/^hello/i)) {

    switch (getRandomNumber(1, 3)) {
        case 1:
            bot.sendMessage({
                  to: channelID,
                  message: "Right back at ya!"
              });
            break;
        case 2:
            bot.sendMessage({
                to: channelID,
                message: "Heyo!"
            })
    }
  }
  // If you know your user ID, you can make him have a different reply
  if (message.match(/^whatsup/i)) {
    if (userID === "[userid]") {
      bot.sendMessage({
        to: channelID,
        message: "Yes " + user + ", whatsup indeed."
      })
    } else {
      bot.sendMessage({
        to: channelID,
        message: "I don't know you!"
      })
    }
  }
  /* If warlocks own messages cointain any of the matches above, it'll reply to
  itself for a short loop, so watch out. There is a way to fix it, try and find
  that out for yourself though */

  /* Well, those are the basics! This is how WARLOCK started, from there
  I learned everything else using the documentation and experimentation. */
});
