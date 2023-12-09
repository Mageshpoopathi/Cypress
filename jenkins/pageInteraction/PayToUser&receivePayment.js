const elements = require('../pageRepo/payToUser&receivePayment.json')

 export class PageElements {

    bankingMenuClick(){
    cy.get(elements.PaytoUserElements.banking).click()
    }

    paymentToUser(){
      cy.xpath(elements.PaytoUserElements.payToUser).click()
    }

    contactButton(){
      cy.get(elements.PaytoUserElements.contactButton).click()
    }
    contactSelect(){
      cy.xpath(elements.PaytoUserElements.contact).click()
    }

    amountEnter(){
      cy.get(elements.PaytoUserElements.amount).type("22")
    }

    schedulingButtonclick(){
      cy.get(elements.PaytoUserElements.scheulingClick).click()
    }
    monthlyInstallmentClick(){
      cy.xpath(elements.PaytoUserElements.monthlyInstallment).click()
    }
    numberOfInstallmentText(){
      cy.get(elements.PaytoUserElements.noOfInstallment).type("9")
    }
    nextButtonClick(){
      cy.get(elements.PaytoUserElements.nextButton).click()
    }
    confirmButtonclick(){
      cy.get(elements.PaytoUserElements.confirmButton).click()
    }
    notificationMessage(){
      cy.get(elements.PaytoUserElements.notificationMessage).should('be.visible')
    }

    receivepaymentclick(){
      cy.xpath(elements.receivePayment.receivePaymentMenu).click()
    }
    fromUser(){
      cy.get(elements.receivePayment.fromUser).type("Car repair")

    }
    fromUserSelect(){
      cy.get(elements.receivePayment.userSelect).click()
    }
    enteramount(){
    cy.get(elements.receivePayment.amount).type("22")
    }
    nextButton(){
      cy.xpath(elements.receivePayment.nextButton).click()
    }
    
    


 }