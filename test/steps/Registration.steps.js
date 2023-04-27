const { Given, When, Then } = require('cucumber');
const { requestPost } = require('../../src/resquestHelper/request.js');
const { getUrl, getPayloadFile } = require('../../src/jsonDecoder/jsonMapper.js');
const assert = require('assert')

let uri = ""
let response = ""

Given("the user does a POST request to {string}", function (url) {
    uri = getUrl("POST", url)
});

When("the user sends the {string} payload", async function (payloadFile) {
    const payload = getPayloadFile("POST", payloadFile)
    response = await requestPost(uri, payload)
});

Then("the user gets {string} response code with a token", function (responseCode) {
    assert.deepStrictEqual(response.statusCode, 200)
    assert.deepStrictEqual(response.json.hasOwnProperty('token'), true)
});

Then("the user gets {string} response code with an error", function (responseCode) {
    assert.deepStrictEqual(response.statusCode, 400)
    assert.deepStrictEqual(response.json.hasOwnProperty('error'), true)
});