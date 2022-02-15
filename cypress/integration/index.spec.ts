beforeEach(() => {
  cy.visit("/");
  cy.injectAxe();
});

describe("Home", () => {
  it("should not have any accessibility violations", () => {
    cy.checkA11y();
  });
});
