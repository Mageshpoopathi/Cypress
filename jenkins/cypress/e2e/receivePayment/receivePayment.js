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

Given ("Click banking Menu after loging with valid credentials",()=>{
    cy.wait(5000)
elements.bankingMenuClick()
})
When  ("Click the receive-payment button",()=>{
 elements.receivepaymentclick()
})
Then  ("Enter the from user and Amount",()=>{
elements.fromUser()
elements.fromUserSelect()
elements.enteramount()
})
And   ("Click the next button and check the payment works or not",()=>{

elements.nextButton()
let expUrl="https://demo.cyclos.org/ui/banking/pos";
let actUrl=cy.url();
assert.equal(expUrl,actUrl)
let exptitile = "Receive payment - Cyclos"
let acttitle =cy.title()
assert.notEqual(exptitile,acttitle)

})