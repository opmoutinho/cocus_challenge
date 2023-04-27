# COCUS
## COCUS Recruitment Assignment – QA Automation

### SETUP

Requires:
- 1. NPM
- 2. Docker
- 3. AWS CLI


### Task 1 – RESTful API tests
Use the provided API at https://reqres.in/ for all tests in this section. All request payloads and
responses are in JSON format.

### Registration

#### 1 Scenario: Successful registration

- a. POST on https://reqres.in/api/register [x]
- b. Payload: email and password [x]
- c. Response: 200 along with a token [x]

#### 2 Scenario: Unsuccessful registration

- a. POST on https://reqres.in/api/register [x]
- b. Payload: email [x]
- c. Response: 400 along with an error [x]

#### 3 Any other scenarios you would add to this endpoint?
For this specific endpoint no. I could test without any payload, or invalid password. But after reading the documentation, it only points out the already covered cases. [x]

### Get User List

#### 1 Scenario: List users

- a. GET on https://reqres.in/api/users [x]
- b. No payload [x]
- c. Response: 200 with list of users [x]


### Task 2 – Stream processing test

#### Setup

- Install Docker virtualization tool on your machine [x]
- Install Azure-cli tool on your machine - I opted this out I could not find a way to user Azure with Localstack
- Pull an Localstack image [x]
- Have a Docker container running the downloaded Localstack image [x]
- Create a SQS queue on Localstack named “cars” [x]

#### Test Messages
- 1 Scenario: Messages are consumed successfully [x]
    - a. Produce a few messages on queue with cars details. Message should contain [x]
details on a car as follows:
        - i. Brand name [x]
        - ii. Model [x]
        - iii. Number of Doors [x]
        - iv. Indicating whether it is a Sports car or not [x]
    - b. Consume previously produced messages from queue with cars details. [x]
    - c. Compare the produced and consumed messages to verify that all messages were delivered correctly. [x]

[i] The credentials will only be valid for 7 days.