const urlMappings = require('../../test/resources/requestUrls.json')
const payloadFilesMappings = require('../../test/resources/payloadFiles.json')

function getUrl(method, id){
    return urlMappings[method][id]
}

function getPayloadFile(method, id){
    return payloadFilesMappings[method][id]
}

module.exports = {
    getUrl,
    getPayloadFile
}