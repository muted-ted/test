describe('Basic calculator functions', () => {

  const num1 = 7
  const num2 = 3
  const zero = 0
  const negNum1 = -7.42
  const decNum1 = 2.612
  const decNum2 = 3.74333
  const sum = num1 + num2
  const subtract = num1 - num2
  const multiply = num1 * num2
  const divide = num1 / num2
  const concatenate = String(num1) + String(num2)
  const decSumInt = Math.trunc(decNum1 + decNum2)
  const decSum = decNum1 + decNum2
  const negDiv = negNum1 / num2

  const build = '9'

  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
  })

  it('number validation', () => {
    cy.get('#selectBuild').select(build)
    cy.get('.col-sm-7 > #number1Field').type('ghsbsdbd')
    cy.get('.col-sm-7 > #number2Field').type('asfasf')
    cy.get('.col-sm-7 > #calculateButton').click()
    cy.get('#errorMsgField').should('have.text', 'Number 1 is not a number')
  })

  it('add whole numbers', () => {
    cy.get('#selectBuild').select(build)
    cy.get('.col-sm-7 > #number1Field').type(num1)
    cy.get('.col-sm-7 > #number2Field').type(num2)
    cy.get('.col-sm-7 > #calculateButton').click()
    cy.get('.col-sm-7 > #numberAnswerField').should('have.value', String(sum))
  })

  it('subtract whole numbers', () => {
    cy.get('#selectBuild').select(build)
    cy.get('.col-sm-7 > #selectOperationDropdown').select('Subtract')
    cy.get('.col-sm-7 > #number1Field').type(num1)
    cy.get('.col-sm-7 > #number2Field').type(num2)
    cy.get('.col-sm-7 > #calculateButton').click()
    cy.get('.col-sm-7 > #numberAnswerField').should('have.value', String(subtract))
  })

  it('multiply numbers', () => {
    cy.get('#selectBuild').select(build)
    cy.get('.col-sm-7 > #selectOperationDropdown').select('Multiply')
    cy.get('.col-sm-7 > #number1Field').type(num1)
    cy.get('.col-sm-7 > #number2Field').type(num2)
    cy.get('.col-sm-7 > #calculateButton').click()
    cy.get('.col-sm-7 > #numberAnswerField').should('have.value', String(multiply))
  })

  it('divide whole numbers', () => {
    cy.get('#selectBuild').select(build)
    cy.get('.col-sm-7 > #selectOperationDropdown').select('Divide')
    cy.get('.col-sm-7 > #number1Field').type(num1)
    cy.get('.col-sm-7 > #number2Field').type(num2)
    cy.get('.col-sm-7 > #calculateButton').click()
    cy.get('.col-sm-7 > #numberAnswerField').should('have.value', String(divide))
  })

  it('concatenate whole numbers', () => {
    cy.get('#selectBuild').select(build)
    cy.get('.col-sm-7 > #selectOperationDropdown').select('Concatenate')
    cy.get('#integerSelect').should('not.be.visible')
    cy.get('.col-sm-7 > #number1Field').type(num1)
    cy.get('.col-sm-7 > #number2Field').type(num2)
    cy.get('.col-sm-7 > #calculateButton').click()
    cy.get('.col-sm-7 > #numberAnswerField').should('have.value', concatenate)
  })

  it('integers only', () => {
    cy.get('#selectBuild').select(build)
    cy.get('.col-sm-7 > #selectOperationDropdown').select('Add')
    cy.get('.col-sm-7 > #number1Field').type(decNum1)
    cy.get('.col-sm-7 > #number2Field').type(decNum2)
    cy.get('#integerSelect').click()
    cy.get('.col-sm-7 > #calculateButton').click()
    cy.get('.col-sm-7 > #numberAnswerField').should('have.value', decSumInt)
  })

  it('decimals', () => {
    cy.get('#selectBuild').select(build)
    cy.get('.col-sm-7 > #selectOperationDropdown').select('Add')
    cy.get('.col-sm-7 > #number1Field').type(decNum1)
    cy.get('.col-sm-7 > #number2Field').type(decNum2)
    cy.get('.col-sm-7 > #calculateButton').click()
    cy.get('.col-sm-7 > #numberAnswerField').should('have.value', decSum)
  })

  it('division by zero', () => {
    cy.get('#selectBuild').select(build)
    cy.get('.col-sm-7 > #selectOperationDropdown').select('Divide')
    cy.get('.col-sm-7 > #number1Field').type(decNum1)
    cy.get('.col-sm-7 > #number2Field').type(zero)
    cy.get('.col-sm-7 > #calculateButton').click()
    cy.get('#errorMsgField').should('have.text', 'Divide by zero error!')
  })

  it('negative number division', () => {
    cy.get('#selectBuild').select(build)
    cy.get('.col-sm-7 > #selectOperationDropdown').select('Divide')
    cy.get('.col-sm-7 > #number1Field').type(negNum1)
    cy.get('.col-sm-7 > #number2Field').type(num2)
    cy.get('.col-sm-7 > #calculateButton').click()
    cy.get('.col-sm-7 > #numberAnswerField').should('have.value', negDiv)
  })

})