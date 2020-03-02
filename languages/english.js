const languageData = {
    PING: (ms) => `Pong! Bot's latency: ${ms}ms`,
    LANGUAGE_UPDATED: "Bot language updated!",
    MISSING_LANGUAGE: "You must specify a valid language! (english or french)",
    HELLO: "Hello!",
    LANGUAGE_NO_EXIST: "This langage doesn't exist!"
};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(args);
    else return translation;
};

module.exports = translate;
