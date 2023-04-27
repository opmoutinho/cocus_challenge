Feature: User Registration.

    Scenario: User Registration is successfull
        Given the user does a POST request to "register"
        When the user sends the "Register Success" payload
        Then the user gets "200" response code with a token

    Scenario: User Registration is unsuccessfull
        Given the user does a POST request to "register"
        When the user sends the "Register Incorrect" payload
        Then the user gets "400" response code with an error