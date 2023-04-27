Feature: User Listing

    Scenario: Get User List
        Given the user does a GET request to "users"
        When the request is successfull
        Then the user gets "200" response code
        And the user gets a list of users