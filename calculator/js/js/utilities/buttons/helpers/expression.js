import { solution } from './solution.js'

const problemDiv = document.querySelector('.screen__problem')
const solutionDiv = document.querySelector('.screen__solution')

const signs = {
  '/': '<svg class="problem__icon"><use href="icons.svg#divide"/></svg>',
  '*': '<svg class="problem__icon"><use href="icons.svg#multiple"/></svg>',
  '-': '<svg class="problem__icon"><use href="icons.svg#minus"/></svg>',
  '+': '<svg class="problem__icon"><use href="icons.svg#plus"/></svg>'
}

export function assignExpressionValues({strFirstNumber, sign, strSecondNumber}) {
  expressionProxy.strFirstNumber = strFirstNumber
  expressionProxy.sign = sign
  expressionProxy.strSecondNumber = strSecondNumber
}

export const expressionObject = {
  strFirstNumber: '',
  sign: '',
  strSecondNumber: ''
}

let expressionProxy = new Proxy(expressionObject, {
  set: (expression, key, value) => {
    expression[key] = value
    problemDiv.innerHTML = (`${expression.strFirstNumber} ${signs[expression.sign] || ''} ${expression.strSecondNumber}`)
    solutionDiv.innerHTML = (solution())
    return true
  }
})
