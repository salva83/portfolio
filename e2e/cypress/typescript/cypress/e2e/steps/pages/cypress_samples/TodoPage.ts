import { getEnvironment } from "../../../../helpers/environment/env";
export default class TodoPage {
  private readonly BASE_URL = "https://example.cypress.io/todo";

  private readonly CSS_TODO = '[data-test="new-todo"]';
  private readonly CSS_TODO_HEADER_H1 = "h1";
  private readonly CSS_ADDED_PAY_SELECTOR = "ul.todo-list";

  open(): void {
    getEnvironment();
    cy.visit(this.BASE_URL);
    cy.get("body").should("be.visible");
  }

  todoHeaderIsVisible(): void {
    cy.get(this.CSS_TODO_HEADER_H1).should("be.visible");
  }

  fillElementForList(text: string): void {
    cy.get(this.CSS_TODO).should("be.visible").type(text);
  }

  addItemToList(): void {
    cy.get(this.CSS_TODO).should("be.visible").type("{enter}");
  }

  payElementIsVisible(): void {
    cy.get(this.CSS_ADDED_PAY_SELECTOR).children().should("have.length", 3);
  }
}
