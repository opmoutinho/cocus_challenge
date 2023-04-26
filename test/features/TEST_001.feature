Feature: User Registration.

    Scenario: User Registration is successfull
        Given I do a POST request to "register"
        When I send the "Register Correct" payload
        Then the I get "200" response code with a token

    Scenario: User Registration is unsuccessfull
        Given I do a POST request to "register"
        When I send the "Register Incorrect" payload
        Then the I get "400" response code with an error