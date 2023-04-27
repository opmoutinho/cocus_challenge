const AWS = require('aws-sdk');
const creds = require('../aws/resources/credentials.json')

/**
 * Sets the credentials to estabilish the connection to AWS
 * Configuration block
 * AWS SDK Native
 */
const myCredentials = new AWS.Credentials(creds.accessKeyID, creds.secretAccessKey, sessionToken = null);

const myConfig = new AWS.Config({
  credentials: myCredentials, region: 'eu-west-3'
});

AWS.config.update({ region: 'eu-west-3' });

const sqs = new AWS.SQS({ apiVersion: 'latest' });

/**
 * Sens a message request to an SQS Queue
 * @param {parameters object} params more info:(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html)
 * @returns an {object} literal with the properties id {string} (message id) and body {string} (message body) of the sent message
 */
async function sendMessage(params) {
  let messageID = ""
  await sqs.sendMessage(params, async function (err, data) {
    if (err) {
      console.log("Error", err);
    } if (data) {
      messageID = {
        "id": data.MessageId,
        "body": params.MessageBody
      };
    }
  }).promise();
  return messageID
};

/**
 * Receives a message from the SQS Queue
 * @returns an {object} literal with the properties id {string} (message id) and body {string} (message body) of the received message
 */
async function receiveMessage() {
  let messageID = ""
  await sqs.receiveMessage({ QueueUrl: creds.queueURL }, async function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      messageID = {
        "id": data.Messages[0].MessageId,
        "body": data.Messages[0].Body
      };
    }
  }).promise()
  return messageID
};

module.exports = {
  receiveMessage,
  sendMessage
}