import {Given, When, Then,And, Before } from "cypress-cucumber-preprocessor/steps";
import { PageElements } from "../../../pageInteraction/PayToUser&receivePayment.js";
import { loginPageElements } from "../../../pageInteraction/loginAndPayToSystem";
const elements=new PageElements
const loginelements=new loginPageElements
Before(()=>{
    cy.visit("https://demo.cyclos.org/ui/home");
    loginelements.visitLogin()
    loginelements.username("demo")
    loginelements.password("1234")
    loginelements.SubmitButton()
})

Given  ("click the Banking menu after login to the application",()=>{
    cy.wait(5000)
loginelements.BankingLink()
})
When   ("Click the pay-to-user ad proceed payment",()=>{
elements.paymentToUser()
})
Then   ("Select contact from the list",()=>{
elements.contactButton()
elements.contactSelect()
cy.wait(5000)
elements.amountEnter()
}) 
And    ("Select the options from the scheduling list",()=>{
  
    elements.schedulingButtonclick()
    elements.monthlyInstallmentClick()
    elements.numberOfInstallmentText()
    cy.wait(5000)
})
Then   ("click the next button and confirm button t make payment",()=>{
    elements.nextButtonClick()
    elements.confirmButtonclick()
     cy.wait(5000)
    if(elements.notificationMessage){
    cy.screenshot("Payment unsuccessful")
    }
})

