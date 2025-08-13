// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("adicionarLista", () => {
	cy.get(".custom-input").contains("Adicionar outra lista").click()
	cy.get(".custom-input > form > input").type("Estudar")
	cy.get("button[type=submit]").contains("Adicionar Lista").click()
})

Cypress.Commands.add("adicionarTarefa", () => {
	cy.get("#EstudarCreateTask").click()
	cy.get(".custom-input > form > input[type=text]").type("Estudar Cypress")
	cy.get(".custom-input-edit-footer > button[type=submit]").click()
})