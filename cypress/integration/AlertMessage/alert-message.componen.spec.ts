const getIframeBody = () => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return (
    cy
      .get('iframe[data-is-storybook="true"]')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      // https://on.cypress.io/wrap
      .then(cy.wrap)
  )
}

describe('My Component', () => {
  it('should respond to click on button with warning', () => {
    cy.visit('http://localhost:6006/?path=/story/ui-bootstrap-alert--primary')
    getIframeBody()
      .find('div.alert')
      .should('have.css', 'color', 'rgb(8, 66, 152)')
    // cy.pause()
  })
})
