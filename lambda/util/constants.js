/* CONSTANTS */

let constants = {
    appId: "amzn1.ask.skill.6ce7639f-17af-4ee7-9798-f50c3768465f",
    //dynamoDBTableName: "alexa-skill-multitube-playback",
    pageSize: 20,

    // environment variables
    herokuApp: process.env.HEROKU_APP_URL || "https://als12171-youtube.herokuapp.com",
    interactiveWait: !(process.env.DISABLE_INTERACTIVE_WAIT === "true" || process.env.DISABLE_INTERACTIVE_WAIT === true || process.env.DISABLE_INTERACTIVE_WAIT === 1),
    cachePollingInterval: Math.max(1000, parseInt(process.env.CACHE_POLLING_INTERVAL || "5000", 10)),
    askInterval: Math.max(30000, parseInt(process.env.ASK_INTERVAL || "45000", 10))
}

module.exports = constants;
