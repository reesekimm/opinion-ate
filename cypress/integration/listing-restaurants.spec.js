describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place'
    const pizzaPlace = 'Pizza Place'

    cy.intercept('GET', 'https://outside-in-dev-api.herokuapp.com/vg8dRmI6Exi8e57MGUmwCjWWWrVzuafm/retaurants', {
      body: [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ],
    })

    cy.visit('/')
    cy.contains(sushiPlace)
    cy.contains(pizzaPlace)
  })
})
