import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

// Cenario: Abrir página de Login
Given('que estou na página Home', () => {
    cy.visit("http://localhost:3000/")
});

When('clicar no botão de Login', () => {
    cy.wait(3000)
    cy.contains('Login').click()
});

Then('será exibida página com título Login', () => {
    cy.wait(3000)
    cy.title().should('eq', 'Login')
});

// Cenario: Invalidar campos vazios
Given('que desejo invalidar campos vazios', () => {
    cy.wait(3000)
    cy.get('input[name="email"]').clear({ force: true })
    cy.get('input[name="senha"]').clear({ force: true })
});

When('clicar no botão Entrar', () => {
    cy.wait(3000)
    cy.contains('Entrar').click()
});

Then('será exibido "Erro: E-mail inválido!"', () => {
    cy.wait(3000)
    cy.contains('Erro: E-mail inválido!')
});

And('será exibido "Erro: Senha inválida!"', () => {
    cy.wait(3000)
    cy.contains('Erro: Senha inválida!')
});

// Cenario: Limpar campos
Given('que entrei com email errado', () => {
    cy.wait(3000)
    cy.get('input[name="email"]').type('errado@email.com');
});

And('que entrei com a senha errada', () => {
    cy.wait(3000)
    cy.get('input[name="senha"]').type('errada');
});

When('clicar no botão Limpar', () => {
    cy.wait(3000)
    cy.contains('Limpar').click();
});

Then('o campo e-mail deve estar vazio', () => {
    cy.wait(3000)
    cy.get('input[name="email"]').should('have.value', '');
});

And('o campo senha deve estar vazio', () => {
    cy.wait(3000)
    cy.get('input[name="senha"]').should('have.value', '');
});

// Cenario: Login Correto
Given('que entrei com email certo', () => {
    cy.wait(3000)
    cy.get('input[name="email"]').type('teste@email.com');
});

And('que entrei com a senha certa', () => {
    cy.wait(3000)
    cy.get('input[name="senha"]').type('teste');
});

// Já existe
// When('clicar no botão Entrar', () => {
//     cy.wait(3000)
//     cy.contains('Entrar').click();
// });

Then('será exibida página com título Dashboard', () => {
    cy.wait(3000)
    cy.title().should('eq', 'Dashboard')
});