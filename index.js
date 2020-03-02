const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");
// here, guildLanguages is our database
let guildLanguages = require("./guilds-language.json");

client.on("ready", () => {
    console.log("Ready!");
});

client.on("message", (message) => {
    // Gets guild langugage (it can be "english" or "french" in our case)
    const guildLanguage = guildLanguages[message.guild.id] || "english"; // "english" will be the default language
    const language = require(`./languages/${guildLanguage}`);

    if(message.content === "hello"){
        // Reply hello in the guild language
        message.channel.send(language("HELLO"));
    }

    if(message.content === "!ping"){
        // Translate PING and send it
        message.channel.send(language("PING", client.ping));
    }
    
    if(message.content.startsWith("!setlang")){
        const langages = ["english", "french"]
        const newLanguageName = message.content.split(" ")[1];
        // If no new language is specified, returns an error message
        if(!newLanguageName){
            return message.channel.send(language("MISSING_LANGUAGE"));
        }
        if(!langages.includes(newLanguageName)){
            return message.channel.send(language("LANGUAGE_NO_EXIST"));
        }
        // Update our json database
        guildLanguages[message.guild.id] = newLanguageName;
        fs.writeFileSync("./guilds-language.json", JSON.stringify(guildLanguages), "utf-8");
        // Gets the new language
        const newLanguage = require(`./languages/${newLanguageName}`);
        // Send a success message
        message.channel.send(newLanguage("LANGUAGE_UPDATED"));
    }

});

client.login("SUPER_SECRET_TOKEN");
