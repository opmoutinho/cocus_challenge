const { Given, When, Then } = require('cucumber')
const {requestGet, requestPost } = require('../../src/resquestHelper/request.js')
const {getUrl} = require('../../src/jsonDecoder/jsonMapper.js')

let uri = ""

Given("I do a POST request to {url}", function (url) {
    uri = getUrl(url)
});

When("When I send the {payloadFile} payload", function (payloadFile){
    requestPost(uri, true, )
});

Then("Then the I get {responseCode} response code with a token", function (responseCode){

});

Then("Then the I get {responseCode} response code with an error", function (responseCode){

});