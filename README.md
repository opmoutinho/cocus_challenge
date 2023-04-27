# COCUS
## COCUS Recruitment Assignment – QA Automation

### SETUP
Bear in mind that I developed this solution in Windows. I used the CLI for most of the applications more specifically PowerShell.
Requires:
- 1. ***NPM*** ([installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- 2. ***Docker*** ([installation guide](https://docs.docker.com/desktop/install/windows-install/))
- 3. ***AWS CLI*** ([instalattion guide](https://docs.docker.com/desktop/install/windows-install/))

- `git clone https://github.com/opmoutinho/cocus_challenge.git`
- `npm install`
- `docker composose up`
- Open a new terminal
- `npm run build`



### Task 1 – RESTful API tests
Use the provided API at https://reqres.in/ for all tests in this section. All request payloads and
responses are in JSON format.

### Registration

#### 1 Scenario: Successful registration

- [ ] POST on https://reqres.in/api/register
- [ ]  Payload: email and password
- [ ] Response: 200 along with a token

#### 2 Scenario: Unsuccessful registration

- [ ] POST on https://reqres.in/api/register [x]
- [ ] Payload: email [x]
- [ ] Response: 400 along with an error [x]

#### 3 Any other scenarios you would add to this endpoint?
For this specific endpoint NO. I could test without any payload, or invalid password. But after reading the documentation, it only points out the already covered cases.

### Get User List

#### 1 Scenario: List users

- [ ] GET on https://reqres.in/api/users [x]
- [ ] No payload [x]
- [ ] Response: 200 with list of users [x]


### Task 2 – Stream processing test

#### Setup

- [ ] Install Docker virtualization tool on your machine
- [ ] Install Azure-cli tool on your machine - I opted this out I could not find a way to user Azure with Localstack
- [ ] Pull an Localstack image
- [ ] Have a Docker container running the downloaded Localstack image
- [ ] Create a SQS queue on Localstack named “cars”

#### Test Messages
##### 1 Scenario: Messages are consumed successfully 
- [ ]  Produce a few messages on queue with cars details. Message should contain details on a car as follows:
        - Brand name
        - Model
        - Number of Doors
        - Indicating whether it is a Sports car or not
    - [ ] Consume previously produced messages from queue with cars details.
    - [ ] Compare the produced and consumed messages to verify that all messages were delivered correctly.

##Information and observations:**

> **The credentials (*./src/aws/resources/credentials.json*) will only be valid for 7 days.**

### **Can I Rerun the tests without shutting down the docker container?**
> No. My main focus was to **build an MVP**. I'm not deleting the messages after they are read, so in a rerun you could probably end up getting mismatch between messageIDs and desired content.
### **What would you like to improve on the project?**
> I tried to make the project as **scalable** as possible. I used the *Json files* as helpers to be able to highly scale the *Gherkin Sentences*, and reuse them as much as possible. But I recognize that the development was very ***objective-driven***, and I was trying to solve the problems. My next steps would include **deleting the received messages**, investigating and successfully integrating ***Azure cli*** instead of AWS and going **deeper** into the ***evaluations and assertions*** I am making.
### **What were your biggest struggles in developing this solution?**
> My main struggle was the initial configuration. I was kinda lost without being able to rely on *playwright*, or *selenium*, or any other automation framework. But as soon as I ended up realizing that I could do much more with just ***JS***, I took off, until I had to face the struggle to try integrating ***Azure CLI*** with localstack, and wasn't able to.
### **Did you enjoy doing this challenge?**
> Yes. It was very opositive to do this challenge to validate my BE testing skills. And to prove myself above all.
### **What do you expect to be the feedback from yout solution?**
> I really hope it is positive. I can understand if it is not the most "best practices" wise solution. But it's just a sample of what I can achieve and do. I'm really proud of what I was able to develop, and, above all, I had a lot of fun developing this solution. I'm really hoping for positive feedback, and **fingers crossed for a future job invitation**.
