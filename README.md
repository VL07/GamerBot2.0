# GamerBot2.0


## What is Gamerbot2.0?
Gamerbot2.0 is a discord-bot developed by-and-for the STAMSITE discord community. The intended purpose is to facilitate levelup-bonuses and fun interactions for the discord community, and to potentially be expanded to include a few small minigames in the future :D

STAMSITE is not involved in the development of this bot, do NOT ask him about issues with it. Contact @Sake100#1952 or @Little_Fox#2194 on discord with issues or leave an [issue](https://github.com/stamdiscord/GamerBot2.0/issues) here on GitHub if you have discovered a bug.




## Running your own GamerBot2.0!

### Installation
GamerBot2.0 requires node.js, npm and MongoDB to run.

1. Clone this repository into the directory you want to run the bot in.
2. Run `npm install` in order to install all the required node.js packages.
3. Create a new bot under [Discord developers portal](https://discord.com/developers)
4. Set up a MongoDB database (the free tier will do fine).
5. in the `.env` file in the GamerBot2.0 directory add the following:

```
token = YOUR_DISCORD_BOT_TOKEN
mongodb_srv = ADDRESS_TO_MONGODB_SERVICE
config_id = normally 1 but can be changed for debugging purposes or running several bots on the same database.
```

6. To run the bot type `node GamerBot2.0.js` and if you have invited the bot to your server you should see it coming online!




### Commands
`.` is the standard prefix, this can be changed with `.confset`

#### Member commands:
All members of the server can see and use these commands.

`.help` - help displays the available commands; help $COMMAND explains the command

`.me` - shows relevant information about whoever executes the command

`.memberinfo $user` - shows relevant information about who is tagged

`.ping` - displays ping-time between the bot and discord

`.servernfo` - currently shows the number of members on the server

`.suggest` - only meant for the official instance of GamerBot2.0, adds a feature suggestion in the database.

`.uptime` - displays uptime of the bot.


#### Admin commands:
The owner of the server and all users with the role `Administrator` can use these commands.

`.confget` - displays the current configuration of the bot.

`.confset $KEY $VALUE` - allows the Administrator to set the configuration the keys are the following:

```
	debug	- auto-reloads commands, handy while testing
	xp {  	- settings regarding xp (list of settings in {})
	   timeoutsEnabled 	   - Administrators are allowed to timeout the gain of xp for user, or not
	}
	prefix	- sets the global command-prefix for the bot
	activity  - displays the activity message under the bot name in the members list
	activityType  - for example "playing" or "listening to"
```

`.emujoin` - emulates someone joining the guild, handy for development and bot testing.

`.setxp {<mentionedUser>|<userID>} -x <xpAmount>` - using user Tag or ID you can set the amout of XP for the user in the database, can be used for punishments or otherwise

`.setxp {<mentionedUser>|<userID>} -t <xpTimeout>` - using user Tag or ID you can put a user in XP timeout, standard is miliseconds. Use suffix `h` for hours, `m` for minutes, and `s` for seconds. Example: `60s` `8h` or `15m`.

#### Examples:
`.me`

`.memberinfo @McPerson#1337`

`.setxp @McPerson#1337 -x 0`

`.confset activity "Minecraft"`

`.confset debug true`

`.confset xp {"timeoutsEnabled": true}`


## Contribution
If you want to contribute to the development of the bot you can do so in the following ways:
- **Create a new [issue](https://github.com/stamdiscord/GamerBot2.0/issues):** This is used to notify others that you've found a bug that needs to be fixed or that you want a new feature.
- **Make a [Pull Request](https://github.com/stamdiscord/GamerBot2.0/pulls):** Make Pull Requests with small changes. Try to only face one issue at a time.

## Network graph
Click [here](https://github.com/stamdiscord/GamerBot2.0/network) to view the network graph of this project.
