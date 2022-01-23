describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place'
    const pizzaPlace = 'Pizza Place'

    cy.intercept('GET', 'https://outside-in-dev-api.herokuapp.com/KP1YaFHIrRhdeL6c5o5wngkYYqwZPt8s/restaurants', {
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
