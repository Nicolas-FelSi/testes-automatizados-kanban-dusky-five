/// <reference types="cypress"/>

describe('Funcionalidade de listas', () => {
	beforeEach(() => {
		cy.visit("https://kanban-dusky-five.vercel.app/")
	});

	it('Deve adicionar uma lista com sucesso', () => {
		cy.adicionarLista()
		cy.get("h1.board-header-title").should("contain", "Estudar")
	});

	it('Deve remover uma lista com sucesso', () => {
		cy.adicionarLista()
		cy.get("#Estudartrash").click()
	});
});