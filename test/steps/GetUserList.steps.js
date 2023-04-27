const { Given, When, Then } = require('cucumber');
const { requestGet } = require('../../src/resquestHelper/request.js');
const { getUrl } = require('../../src/jsonDecoder/jsonMapper.js');
const assert = require('assert')

let uri = ""
let response = ""

Given("the user does a GET request to {string}", function (url) {
    uri = getUrl("GET", url)
});

When("the request is successfull", async function () {
    response = await requestGet(uri)
});

Then("the user gets {string} response code", function (responseCode) {
    assert.deepStrictEqual(response.statusCode, Number(responseCode))
});

Then('the user gets a list of users', function(){
    assert.deepStrictEqual(response.json.data.length > 0, true)
});