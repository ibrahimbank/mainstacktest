describe("homepage spec", () => {
  it("renders the navbar", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-navid="navbar"]').should("exist");
  });
  it("renders the navbar list", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-navtitleId="navbar-titleId-1"]').should("exist");
    cy.get('[data-navtitleId="navbar-titleId-2"]').should("exist");
    cy.get('[data-navtitleId="navbar-titleId-3"]').should("exist");
    cy.get('[data-navtitleId="navbar-titleId-4"]').should("exist");
    cy.get('[data-navtitleId="navbar-titleId-5"]').should("exist");
  });

  it("renders the wallet list", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-walletId="wallet-data-1"]').should("exist");
    cy.get('[data-walletId="wallet-data-2"]').should("exist");
    cy.get('[data-walletId="wallet-data-3"]').should("exist");
    cy.get('[data-walletId="wallet-data-4"]').should("exist");
  });

  it("renders the transaction list", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-transactionId="transaction-data-1"]').should("exist");
    cy.get('[data-transactionId="transaction-data-2"]').should("exist");
    cy.get('[data-transactionId="transaction-data-3"]').should("exist");
    cy.get('[data-transactionId="transaction-data-4"]').should("exist");
    cy.get('[data-transactionId="transaction-data-5"]').should("exist");
    cy.get('[data-transactionId="transaction-data-6"]').should("exist");
    cy.get('[data-transactionId="transaction-data-7"]').should("exist");
  });
});
