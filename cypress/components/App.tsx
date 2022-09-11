import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { mount } from 'cypress/react';

import App from "../../src/App";

Given("I render the component", () => {
    mount(<App />);
});

Then("I should see the text {string}", (text: string) => {
    cy.contains(text).should("exist");
});

it('Empty fields', function () {
    cy.visit('http://localhost:4100/')

    cy.get('.btn')
        .click()

    cy.url()
        .should('contain', 'http://localhost:4100/login')
    cy.get('.error-messages > :nth-child(1)')
        .should('have.text', '\'Email\' must not be empty.')
    cy.get('.error-messages > :nth-child(2)')
        .should('have.text', '\'Password\' must not be empty.')
})