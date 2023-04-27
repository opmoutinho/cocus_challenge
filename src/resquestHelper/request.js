const fecth = require('node-fetch');

/**
 * 
 * @param {string -- URI -- URL} url 
 * @returns an object literal with the response statusCode, and the response json
 */
async function requestGet(url) {
    const response = await fecth(url, {
        method: 'get'
    })
    const status = await response.status;
    const responseJson = await response.json();
    return {
        statusCode: status,
        json: responseJson
    }
}

/**
 * 
 * @param {string -- URI -- URL} url 
 * @param {payload file or file path} payloadInfo 
 * @returns an object literal with the response statusCode, and the response json
 */
async function requestPost(url, payloadInfo) {
    const payload = require(payloadInfo)
    const response = await fecth(url, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    const status = await response.status;
    const responseJson = await response.json();
    return {
        statusCode: status,
        json: responseJson
    }
}

module.exports = {
    requestGet,
    requestPost
}