Feature: Payment to the system
  @valid
  Scenario: user make a payment to the system
    Given check whether the user in correct Webpage
    When click the banking link
    Then click the Payment to System link
    And Make the payment
    Then verify the last payment is successfull or not