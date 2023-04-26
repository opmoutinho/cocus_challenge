const request = require('request');

function requestGet(url) {
    request.get(url, (error, response, body) => {

    if (error) { 
        return error
    }
 
    return {
        "response": response,
        "statusCode": response.statusCode,
        "responseBody": body,
    }
});}

function requestPost(url, isJson, payload) {
    
    request.post({url:url, json:isJson, body:payload}, (error, response, body) => {
        
        if (error) { 
            return error
        }
 
        return {
            "response": response,
            "statusCode": response.statusCode,
            "responseBody": body,
        }
});}