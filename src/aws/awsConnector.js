const AWS = require('aws-sdk');
const creds = require('../aws/resources/credentials.json')

const myCredentials = new AWS.Credentials(creds.accessKeyID, creds.secretAccessKey, sessionToken = null);
const myConfig = new AWS.Config({
  credentials: myCredentials, region: 'eu-west-3'
});

AWS.config.update({region: 'eu-west-3'});

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const params = {
   MessageAttributes: {
     "Title": {
       DataType: "String",
       StringValue: "McLaren"
     },
     "Author": {
       DataType: "String",
       StringValue: "Joseph Mac"
     },
   },
   MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016.",
   // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
   // MessageGroupId: "Group1",  // Required for FIFO queues
   QueueUrl: creds.queueUrl
 };

async function receiveMessage() {
 let messageID = ""
 await sqs.receiveMessage({QueueUrl:creds.queueURL}, async function(err, data) {
   if (err) {
     console.log("Error", err);
   } else {
    messageID = {"id" : data.Messages[0].MessageId,
    "body": data.Messages[0].Body};
   }
 }).promise()
 return messageID
};
 
async function sendMessage(params){
  let messageID = ""
  await sqs.sendMessage(params, async function (err, data) {
    if (err) {
      console.log("Error", err);
    } if(data) {
      messageID = {"id" : data.MessageId,
      "body": params.MessageBody};
    }
  }).promise();
  return messageID
};

 module.exports = {
  receiveMessage,
  sendMessage
}