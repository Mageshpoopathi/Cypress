Feature:Receive payment

@valid
Scenario:User should  receive payment
Given Click banking Menu after loging with valid credentials
When  Click the receive-payment button
Then  Enter the from user and Amount
And   Click the next button and check the payment works or not