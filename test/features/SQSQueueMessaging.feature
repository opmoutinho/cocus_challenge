Feature: Send and Receive SQS Messages

    Scenario: Messages are consumed successfully
        Given the user sends messages to an SQS Queue
        When the user consumes the sent messages
        Then the user verifies all messages were correctly delivered