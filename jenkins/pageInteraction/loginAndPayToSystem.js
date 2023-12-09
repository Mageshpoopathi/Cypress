const loginElementLoctor=require('../pageRepo/loginAndPayToSystem.json')
const payToSystem=require('../pageRepo/loginAndPayToSystem.json')
export class loginPageElements{
    
    visitLogin(){
        cy.get(loginElementLoctor.LoginElements.LoginLink).click();
        return
    }
    username(UserName){
        cy.xpath(loginElementLoctor.LoginElements.InputUserName).type(UserName)
        return
    }
    password(Password){
        cy.xpath(loginElementLoctor.LoginElements.InputPassword).type(Password)
        return
    }
    SubmitButton(){
        cy.xpath(loginElementLoctor.LoginElements.SubmitButton).trigger('mouseover').click()
        return
    }
    BankingLink(){
        cy.xpath(payToSystem.PaytoSystemElements.BankingLink).trigger('mouseover').click()
        return
    }
    paytoSystemLink(){
        cy.xpath(payToSystem.PaytoSystemElements.PayToSystemLink).trigger('mouseover').click()
        return
    }
    AmountforSend(){
        cy.xpath(payToSystem.PaytoSystemElements.Amount).trigger('mouseover').type('{Enter}').type("80");
        return
    }
    DescriptionText(){
        cy.xpath(payToSystem.PaytoSystemElements.Description).trigger('mouseover').click().type("hello user")
        return
    }
    nextButton(){
        cy.xpath(payToSystem.PaytoSystemElements.NextButton).trigger('mouseover').click()
        return
    }
    confirmButton(){
        cy.xpath(payToSystem.PaytoSystemElements.ConfirmButton).trigger('mouseover').click()
        return
    }
    successPayment(){
        cy.xpath(payToSystem.PaytoSystemElements.successPayment).should('exist')
        return
    }
    printPayment(){
        cy.xpath(payToSystem.PaytoSystemElements.printButton).trigger('mouseover').click()
        return
    }
}