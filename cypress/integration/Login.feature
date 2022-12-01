Feature: Login to Portal HICSE

    As a User I should be able to login and logout to Portal

    Background: Navigate to Portal
        Given User navigates to HICSE Portal

    Scenario: Login to Portal 1

        When User enters the Username "qa.admin@hitachivantara.com" and Password "test123"
        And User checks the Remember me Button and clicks on Login button
        Then User verifies "Sessions" on the Sessions Page
