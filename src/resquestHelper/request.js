const fecth = require('node-fetch');

async function requestGet(url) {
    const response = await fecth(url, {
        method: 'get'})
    const status = await response.status;
    const responseJson = await response.json();
    return {
        statusCode: status,
        json: responseJson
    }
}

async function requestPost(url, payloadInfo){
    const payload = require(payloadInfo)
    const response = await fecth(url, {
        method: 'post', 
        body:JSON.stringify(payload), 
        headers: {'Content-Type': 'application/json'}})
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