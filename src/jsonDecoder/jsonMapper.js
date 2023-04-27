const urlMappings = require('../../test/resources/requestUrls.json')
const payloadFilesMappings = require('../../test/resources/payloadFiles.json')

/**
 * Gets the desired url to make an HTTP Request depending on HTTP Verb and ulr Identifier
 * @param {String} method 
 * @param {String} id 
 * @returns the corresponding url to the HTTP Method and identifier
 */
function getUrl(method, id) {
    return urlMappings[method][id]
}

/**
 * Gets the desired payload filepath depending on the HTTP Verb and desired payload Identifier
 * @param {String} method 
 * @param {String} id 
 * @returns the file path to the corresponding payload file
 */
function getPayloadFile(method, id) {
    return payloadFilesMappings[method][id]
}

module.exports = {
    getUrl,
    getPayloadFile
}