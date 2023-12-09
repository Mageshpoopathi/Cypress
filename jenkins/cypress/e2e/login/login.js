import {Given, When, Then,Before } from "cypress-cucumber-preprocessor/steps";
import { loginPageElements } from "../../../pageInteraction/loginAndPayToSystem";
const neatcsv=require('neat-csv')

    let table;
    let username='';
    let password='';
    Before(()=>{
      cy.fixture('Loginvalues.csv')
    .then(neatcsv)
    .then(data=>{
      table=data;
    })
    })

const login_Elements=new loginPageElements
Given('user is on Login Page', () => {
  cy.visit("https://demo.cyclos.org/ui/home");
  login_Elements.visitLogin()
});
When("user has provided Invalid credentials",()=>{
  login_Elements.username("magesh")
  login_Elements.password("2080")
  login_Elements.SubmitButton()
})
When('user has provided valid credentials',()=>{

  for(let i=0;i<table.length;i++){
    username=table[i]['username']
    password=table[i]['password']
    login_Elements.username(username)
    login_Elements.password(password)
    
  if(username=='demo' && password=='1234'){
    login_Elements.SubmitButton()
    cy.wait(5000)
    cy.xpath("//div[@class='personal-label']").should('exist')
    cy.wait(5000)
  } else{
    cy.reload()
  }
  
  }

  // cy.url().then((url) => {
  //   cy.log('Current URL is: ' + url)
  //   websitURL=url;
  //})

})



