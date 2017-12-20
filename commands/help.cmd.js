const cookieblob = require("../cookieblob");
const {MessageEmbed, Message, Client} = require("discord.js");
module.exports = {
    /**
     * @argument {Message} msg
     * @argument {Client} client
     * @argument {Array<String>} args 
     */
    run: async (msg, args, client) => {
        let c = Object.keys(cookieblob.commands).map(v => cookieblob.getCommand(v))
        .filter(x => cmd.meta.permissionLevel == "botOwner" && msg.author.id != cookieblob.config.ownerID)
        .map(c =>`***${c.meta.name}***\nDescription: \`${cmd.meta.description}\` 
Usage: \`${require("../util").renderUsage(key)}\``).join("\n\n");

        let embed = new MessageEmbed()
            .setAuthor("Cookieblob command list",msg.author.avatarURL)
            .setColor(0xffc300)
            .setTimestamp(new Date())
            .setDescription(c);
        msg.channel.send(embed);
    },
    meta: {
        name: "help",
        description: "Show the list of commands you are currently looking at!",
        usage: [],
        permissionLevel:0,
        guildOnly:false
    }
}