import {Given, When, Then,And, Before } from "cypress-cucumber-preprocessor/steps";
import { loginPageElements } from "../../../pageInteraction/loginAndPayToSystem";
const login_Elements=new loginPageElements
const PayToSystem_Elements=new loginPageElements
Before(()=>{
    cy.visit("https://demo.cyclos.org/ui/home");
    login_Elements.visitLogin()
    login_Elements.username("demo")
    login_Elements.password("1234")
    login_Elements.SubmitButton()
    cy.log('login successful in cyclos website')
})
Given('check whether the user in correct Webpage', () => {
    cy.title().should('equals', 'Dashboard - Cyclos')
    cy.log("payment start")
});

When('click the banking link',()=>{
        cy.wait(5000)
        PayToSystem_Elements.BankingLink()
     
});
Then('click the Payment to System link',()=>{
    cy.wait(5000)
    
        PayToSystem_Elements.paytoSystemLink()
});

And('Make the payment',()=>{
   
    PayToSystem_Elements.AmountforSend()
    PayToSystem_Elements.DescriptionText()
    PayToSystem_Elements.nextButton()
    PayToSystem_Elements.confirmButton() 
});

Then('verify the last payment is successfull or not',()=>{
   cy.wait(5000)
        PayToSystem_Elements.successPayment()
            cy.screenshot("successfull payment")
            PayToSystem_Elements.printPayment()  
            cy.log("payment completed")
        
});

