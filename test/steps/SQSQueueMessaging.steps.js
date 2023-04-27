const { Given, When, Then } = require('cucumber');
const { receiveMessage,sendMessage } = require('../../src/aws/awsConnector.js');
const messages = require('../../test/resources/SQSQueueMessaging/sqsMessages.json');
const assert = require('assert');
const { send } = require('process');

let sentMessages = new Map();
let receivedMessages = new Map();
let ids = new Set();

Given("the user sends messages to an SQS Queue", async function () {
    let i = 1
    while(i <= 3){
    const sentMessage = await sendMessage(messages[`message${i}`])
    sentMessages.set(sentMessage.id , sentMessage.body)
    i = i+1;
    }
});

When("the user consumes the sent messages", async function (){ 

    let i = 1
    while(i <= 3){
    const receivedMessage = await receiveMessage()
    receivedMessages.set(receivedMessage.id , receivedMessage.body)
    ids.add(receivedMessage.id)
    i= i+1;
    }
});

Then("the user verifies all messages were correctly delivered", async function (){

    ids.forEach(id => {
        assert.deepStrictEqual(sentMessages.get(id), receivedMessages.get(id))
    })
});