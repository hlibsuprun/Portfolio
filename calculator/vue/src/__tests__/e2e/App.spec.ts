describe('', () => {
  const getByTestId = (dataTestId: string) => {
    return cy.get(`[data-testid='${dataTestId}']`)
  }

  beforeEach(() => {
    cy.visit('/')
  })

  it('initial state of the app', () => {
    getByTestId('problem').should('not.have.text')
    getByTestId('solution').should('have.text', '0')
  })

  it('entering numbers', () => {
    cy.get('button').each($el => {
      if ($el.text().match(/^\d+$/)) {
        cy.wrap($el).click()
      }
    })

    getByTestId('strFirstNumber').should('have.text', '7894561230')
    getByTestId('solution').should('have.text', '7894561230')
  })

  it('entering sings without a number', () => {
    const signs = ['#divide', '#multiple', '#minus', '#plus']

    for (const sign of signs) {
      cy.get('button').find(`svg${sign}`).click()
    }

    getByTestId('problem').should('not.have.text')
    getByTestId('solution').should('have.text', '0')
  })

  it('entering sings with a number', () => {
    const signs = ['#divide', '#multiple', '#minus', '#plus']

    cy.contains('button', '1').click()
    getByTestId('strFirstNumber').should('have.text', '1')

    for (const sign of signs) {
      cy.get(sign).click()
      getByTestId('problem').find(`svg${sign}`)
    }

    getByTestId('solution').should('have.text', '1')
  })

  it('entering the numbers after sign', () => {
    cy.contains('button', '1').click()
    cy.get('#plus').click()

    cy.get('button').each($el => {
      if ($el.text().match(/^\d+$/)) {
        cy.wrap($el).click()
      }
    })

    getByTestId('strFirstNumber').should('have.text', '1')
    getByTestId('problem').find('svg')
    getByTestId('strSecondNumber').should('have.text', '7894561230')

    getByTestId('solution').should('have.text', '7894561231')
  })

  it('toggle dark theme', () => {
    cy.get('#dark').click()

    cy.get('.container').should('have.css', 'background-color', 'rgb(34, 37, 45)')

    cy.get('.theme-switcher').should('have.css', 'background-color', 'rgb(42, 45, 55)')
    cy.get('#light').should('have.css', 'stroke', 'rgb(115, 119, 127)')
    cy.get('#dark').should('have.css', 'fill', 'rgb(255, 255, 255)')

    getByTestId('strFirstNumber').should('have.css', 'color', 'rgb(255, 255, 255)')
    getByTestId('strSecondNumber').should('have.css', 'color', 'rgb(255, 255, 255)')
    getByTestId('solution').should('have.css', 'color', 'rgb(255, 255, 255)')

    cy.get('.numpad').should('have.css', 'background-color', 'rgb(42, 45, 55)')
    cy.get('button').each($el => {
      if ($el.text().match(/^\d+$/)) {
        expect($el).to.have.css('color', 'rgb(255, 255, 255)')
        expect($el).to.have.css('background-color', 'rgb(40, 43, 51)')
      }
    })
    cy.get('#backspace').should('have.css', 'stroke', 'rgb(255, 255, 255)')
    cy.get('#point').should('have.css', 'fill', 'rgb(255, 255, 255)')
  })

  it('toggle light theme', () => {
    cy.get('#light').click()

    cy.get('.container').should('have.css', 'background-color', 'rgb(255, 255, 255)')

    cy.get('.theme-switcher').should('have.css', 'background-color', 'rgb(249, 249, 249)')
    cy.get('#light').should('have.css', 'stroke', 'rgb(60, 61, 68)')
    cy.get('#dark').should('have.css', 'fill', 'rgb(223, 223, 223)')

    getByTestId('strFirstNumber').should('have.css', 'color', 'rgb(52, 54, 60)')
    getByTestId('strSecondNumber').should('have.css', 'color', 'rgb(52, 54, 60)')
    getByTestId('solution').should('have.css', 'color', 'rgb(52, 54, 60)')

    cy.get('.numpad').should('have.css', 'background-color', 'rgb(249, 249, 249)')
    cy.get('button').each($el => {
      if ($el.text().match(/^\d+$/)) {
        expect($el).to.have.css('color', 'rgb(52, 54, 60)')
        expect($el).to.have.css('background-color', 'rgb(247, 247, 247)')
      }
    })
    cy.get('#backspace').should('have.css', 'stroke', 'rgb(52, 54, 60)')
    cy.get('#point').should('have.css', 'fill', 'rgb(52, 54, 60)')
  })
})
