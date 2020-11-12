/// <reference types="cypress" />

// //arrange
// describe('My First Test', function () {
//     //act
//         it('Does not do much', function() {
//     //assert
//             expect(true).to.equal(true);
//         })
//     })

describe('goes to the website', function () {
    //Arrange
    beforeEach(() => {
    // Act
    cy.visit("http://localhost:3000/");
    });
    // VARIABLES ?
    const nameInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const termsOsInput = () => cy.get('input[name="termsOfService"]');
    const submitBtn = () => cy.get('#submitBtn');

    // TEST START HERE
        
    it('test working', function() {
        expect(true).to.equal(true);
    });
    
    it("can type in the inputs", () => {
        nameInput()
        .should("have.value", "")
        .type("tania")
        .should("have.value", "tania");

        emailInput()
        .should("have.value", "")
        .type("tania@tania.com")
        .should("have.value", "tania@tania.com");

        passwordInput()
        .should("have.value", "")
        .type("mynameistania")
        .should("have.value", "mynameistania");
    });

    it("can check terms of service", () => {
        termsOsInput()
        .check()
        .uncheck()
    });

    

    it("cant submit if box blank", () => {
        submitBtn()
        .should("be.disabled");
        nameInput()
        .should("have.value", "");
        emailInput()
        .should("have.value", "");
        passwordInput()
        .should("have.value", "");
        submitBtn()
        .should("be.disabled");
        nameInput()
        .type("tania")
        .should("have.value", "tania");
        submitBtn()
        .should("be.disabled");
        emailInput()
        .type("tania@tania.com")
        .should("have.value", "tania@tania.com");
        submitBtn()
        .should("be.disabled");
        passwordInput()
        .type("mynameistania")
        .should("have.value", "mynameistania");
        submitBtn()
        .should("be.not.disabled")
        // .click();
    });

    it("can submit", () => {
        nameInput()
        .should("have.value", "")
        .type("tania")
        .should("have.value", "tania");

        emailInput()
        .should("have.value", "")
        .type("tania@tania.com")
        .should("have.value", "tania@tania.com");

        passwordInput()
        .should("have.value", "")
        .type("mynameistania")
        .should("have.value", "mynameistania");

        termsOsInput()
        .check();
        submitBtn()
        .click()
    });


    
       

    





})

