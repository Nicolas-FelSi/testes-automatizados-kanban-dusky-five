/// <reference types="cypress"/>

describe("Funcionalidade de tarefas", () => {
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/");
  });

  it("Deve adicionar uma tarefa com sucesso", () => {
    cy.adicionarLista();
    cy.adicionarTarefa();
    cy.get(".content > header").should("contain", "Estudar Cypress");
  });

  it("Deve remover uma tarefa com sucesso", () => {
    cy.adicionarLista();
    cy.adicionarTarefa();
    cy.get(".content > header > p")
      .contains("Estudar Cypress")
      .siblings("svg.trash")
      .click({ force: true });
  });

	it("Deve editar uma tarefa com sucesso", () => {
    cy.adicionarLista();
    cy.adicionarTarefa();
    cy.get(".board-cards").contains("Estudar Cypress").click()
		cy.get('#Estudar\\ CypressModalTitle > .custom-input > p').click();
		cy.get('#Estudar\\ CypressModalTitle > .custom-input > form > input').type("Estudar testes de api");
		cy.get("button[type=submit]").contains("Editar Nome da task").click()
		cy.get('div[class*="sc-hKMtZM"]').click({ force: true });
		cy.get("header > p").should("contain", "Estudar testes de api")
  });

	it('Deve adicionar tags em uma tarefa com sucesso', () => {
		cy.adicionarLista();
    cy.adicionarTarefa();
		cy.get(".content > header > p")
      .contains("Estudar Cypress")
      .click();
		cy.get("#2Color").click()
		cy.get('#Estudar\\ CypressModalTitle + section > .custom-input > p').click();
		cy.get('#Estudar\\ CypressModalTitle + section > .custom-input > form > input').type("Prioridade");
		cy.get("button[type=submit]").contains("Enviar").click()
		cy.get('div[class*="sc-hKMtZM"]').click({ force: true });
		cy.get("label").should("contain", "Prioridade")
	});
});
