const languageData = {
    PING: (ms) => `Pong! Latence du bot: ${ms}ms`,
    LANGUAGE_UPDATED: "Langue du bot mise à jour",
    MISSING_LANGUAGE: "Vous devez préciser une langue valide! (english ou french)",
    HELLO: "Bonjour!"
};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(args);
    else return translation;
};

module.exports = translate;
