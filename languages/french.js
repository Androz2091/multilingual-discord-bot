const languageData = {
    PING: (ms) => `Pong! Latence du bot: ${ms}ms`,
    LANGUAGE_UPDATED: "Langue du bot mise à jour",
    MISSING_LANGUAGE: "Vous devez préciser une langue valide! (english ou french)",
    HELLO: "Bonjour!",
    LANGUAGE_NO_EXIST: "Cette langue n'existe pas!"
};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
