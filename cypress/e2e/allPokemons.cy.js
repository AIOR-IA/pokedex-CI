/* global cy */
describe('Pokedex', function() {
  it('frontpage can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('pikachu').eq(0).click()
    cy.contains('pikachu')
    cy.contains('Home').click()
    cy.contains('bulbasaur')
  })
})