Feature: login to demo cyclos website
  Background:
    Given user is on Login Page
  Scenario: Check invalid login
    When user has provided Invalid credentials
    @valid
  Scenario: Check valid login
    When user has provided valid credentials