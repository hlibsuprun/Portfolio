import { themes } from '../../app/slices/themeSlice'

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
      if ($el.text().match(/^[78945]/)) {
        cy.wrap($el).click({ force: true })
      }
    })

    getByTestId('strFirstNumber').should('have.text', '78945')
    getByTestId('solution').should('have.text', '78945')
  })

  it('entering numbers', () => {
    cy.get('button').each($el => {
      if ($el.text().match(/^[61230]/)) {
        cy.wrap($el).click({ force: true })
      }
    })

    getByTestId('strFirstNumber').should('have.text', '61230')
    getByTestId('solution').should('have.text', '61230')
  })

  it('entering sings without a number', () => {
    const signs = ['divide', 'multiple', 'minus', 'plus']

    for (const sign of signs) {
      getByTestId(sign).click({ force: true })
    }

    getByTestId('problem').should('not.have.text')
    getByTestId('solution').should('have.text', '0')
  })

  it('entering sings with a number', () => {
    const signs = ['divide', 'multiple', 'minus', 'plus']

    cy.contains('button', '1').click({ force: true })
    getByTestId('strFirstNumber').should('have.text', '1')

    for (const sign of signs) {
      getByTestId(sign).click({ force: true })
      getByTestId('problem').find(`[data-testid='${sign}']`)
    }

    getByTestId('solution').should('have.text', '1')
  })

  it('entering the numbers after sign', () => {
    cy.contains('button', '1').click({ force: true })
    getByTestId('plus').click({ force: true })

    cy.get('button').each($el => {
      if ($el.text().match(/^[78945]/)) {
        cy.wrap($el).click({ force: true })
      }
    })

    getByTestId('strFirstNumber').should('have.text', '1')
    getByTestId('problem').find('svg')
    getByTestId('strSecondNumber').should('have.text', '78945')

    getByTestId('solution').should('have.text', '78946')
  })

  it('entering the numbers after sign', () => {
    cy.contains('button', '1').click()
    getByTestId('plus').click({ force: true })

    cy.get('button').each($el => {
      if ($el.text().match(/^[61230]/)) {
        cy.wrap($el).click({ force: true })
      }
    })

    getByTestId('strFirstNumber').should('have.text', '1')
    getByTestId('problem').find('svg')
    getByTestId('strSecondNumber').should('have.text', '61230')

    getByTestId('solution').should('have.text', '61231')
  })

  it('toggle dark theme', () => {
    getByTestId('dark').click({ force: true })

    getByTestId('container').should('have.css', 'background-color', themes.dark.containerBackgroundColor)

    getByTestId('theme-switcher').should('have.css', 'background-color', themes.dark.blocksBackgroundColor)
    getByTestId('light').should('have.css', 'stroke', themes.dark.lightTheme)
    getByTestId('dark').should('have.css', 'fill', themes.dark.darkTheme)

    getByTestId('strFirstNumber').should('have.css', 'color', themes.dark.textColor)
    getByTestId('strSecondNumber').should('have.css', 'color', themes.dark.textColor)
    getByTestId('solution').should('have.css', 'color', themes.dark.textColor)

    getByTestId('numpad').should('have.css', 'background-color', themes.dark.blocksBackgroundColor)
    cy.get('button').each($el => {
      if ($el.text().match(/^\d+$/)) {
        expect($el).to.have.css('color', themes.dark.textColor)
        expect($el).to.have.css('background-color', themes.dark.buttonBackgroundColor)
      }
    })
    getByTestId('backspace').should('have.css', 'stroke', themes.dark.textColor)
    getByTestId('point').should('have.css', 'fill', themes.dark.textColor)
  })

  it('toggle light theme', () => {
    getByTestId('light').click({ force: true })

    getByTestId('container').should('have.css', 'background-color', themes.light.containerBackgroundColor)

    getByTestId('theme-switcher').should('have.css', 'background-color', themes.light.blocksBackgroundColor)
    getByTestId('light').should('have.css', 'stroke', themes.light.lightTheme)
    getByTestId('dark').should('have.css', 'fill', themes.light.darkTheme)

    getByTestId('strFirstNumber').should('have.css', 'color', themes.light.textColor)
    getByTestId('strSecondNumber').should('have.css', 'color', themes.light.textColor)
    getByTestId('solution').should('have.css', 'color', themes.light.textColor)

    getByTestId('numpad').should('have.css', 'background-color', themes.light.blocksBackgroundColor)
    cy.get('button').each($el => {
      if ($el.text().match(/^\d+$/)) {
        expect($el).to.have.css('color', themes.light.textColor)
        expect($el).to.have.css('background-color', themes.light.buttonBackgroundColor)
      }
    })
    getByTestId('backspace').should('have.css', 'stroke', themes.light.textColor)
    getByTestId('point').should('have.css', 'fill', themes.light.textColor)
  })
})
