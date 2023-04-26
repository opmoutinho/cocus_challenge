# COCUS
## COCUS Recruitment Assignment – QA Automatione

### Task 1 – RESTful API tests
Use the provided API at https://reqres.in/ for all tests in this section. All request payloads and
responses are in JSON format.

### Registration

#### 1 Scenario: Successful registration

- a. POST on https://reqres.in/api/register
- b. Payload: email and password
- c. Response: 200 along with a token

#### 2 Scenario: Unsuccessful registration

- a. POST on https://reqres.in/api/register
- b. Payload: email
- c. Response: 400 along with an error

#### 3 Any other scenarios you would add to this endpoint?

### Get User List

#### 1 Scenario: List users

- a. GET on https://reqres.in/api/users
- b. No payload
- c. Response: 200 with list of users


### Task 2 – Stream processing test

#### Setup

- Install Docker virtualization tool on your machine
- Install Azure-cli tool on your machine
- Pull an Localstack image
- Have a Docker container running the downloaded Localstack image
- Create a SQS queue on Localstack named “cars”

#### Test Messages
- 1 Scenario: Messages are consumed successfully
    - a. Produce a few messages on queue with cars details. Message should contain
details on a car as follows:
        - i. Brand name
        - ii. Model
        - iii. Number of Doors
        - iv. Indicating whether it is a Sports car or not
    - b. Consume previously produced messages from queue with cars details.
    - c. Compare the produced and consumed messages to verify that all messages
were delivered correctly.