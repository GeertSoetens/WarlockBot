# WarlockBot
RDF's Discord bot, Warlock.

WARLOCK requires [discord.io](https://izy521.gitbooks.io/discord-io/content/).
Simply follow the instructions on that page, and download discord.io.

(WARLOCK might be put to a different module for discord bots later on.)

Please refrain from copying WARLOCK exactly. You are free to base your bot of WARLOCK, and use the code in your own bot. WARLOCK is entirely open source, so if you want to make changes or update the bot, feel free.

## About
WARLOCK was created for school. For the class Innovation. The purpose is to learn about new things in the field of Web Development that may change the future of my (or our) career.
At the end of a certain time period, I'm supposed to hold a workshop for the class on how to develop a discord bot. At the end of that workshop, the least everyone should be able to do is write a discord bot that can reply to basic commands.

#### Sources
The sources I used are as follows;

[Discord.io documentation](https://izy521.gitbooks.io/discord-io/content/)

[Discord bot tutorial (This tutorial is the main reason I'm using Discord.io)](https://medium.com/@renesansz/tutorial-creating-a-simple-discord-bot-9465a2764dc0)

#### Warning

Since recent, my bots haven't worked for a while. Apperiantly this is because the V5 gateway is depricated. I had not heard about this, but it's easily solvable.

To Solve this issue all you have to do is instead of using
 
 ```
    npm install discord.io
 ```
use

 ```
    npm install woor/discord.io#gateway_v6
 ```
