var fs = require('fs');
var path = require('path');
let request = require("request");

const REMOTE_LOGGER_URL = "https://als12171-logger.herokuapp.com/";

function logError(message) {
    logAux("Error", message);
}

function logInfo(message) {
    logAux("Info", message);
}

function logDebug(message) {
    logAux("Debug", message);
}

function logAux(level, message) {
    let url = REMOTE_LOGGER_URL + "log" + level + "/" + encodeURI(message)
        request(url, function (err, res, body) {
        if (err) {
            //do nothing if remote logging fails
        } else {
            //do nothing if remote logging works
        }
    });
}
module.exports = {
    logError,
    logInfo,
    logDebug
}
