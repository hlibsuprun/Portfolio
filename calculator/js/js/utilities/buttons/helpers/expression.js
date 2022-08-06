import { solutionValue } from './solutionValue.js'

const problem = document.querySelector('.screen__problem')
const solution = document.querySelector('.screen__solution')

const signs = {
  '/': '<svg class="problem__icon"><use href="icons.svg#division"/></svg>',
  '*': '<svg class="problem__icon"><use href="icons.svg#multiplication"/></svg>',
  '-': '<svg class="problem__icon"><use href="icons.svg#minus"/></svg>',
  '+': '<svg class="problem__icon"><use href="icons.svg#plus"/></svg>'
}

export function assignExpressionValues({firstNumber, sign, secondNumber}) {
  expressionProxy.firstNumber = firstNumber
  expressionProxy.sign = sign
  expressionProxy.secondNumber = secondNumber
}

export const expressionObject = {
  firstNumber: '',
  sign: '',
  secondNumber: ''
}

let expressionProxy = new Proxy(expressionObject, {
  set: (expression, key, value) => {
    expression[key] = value
    problem.innerHTML = (`${expression.firstNumber} ${signs[expression.sign] || ''} ${expression.secondNumber}`)
    solution.innerHTML = (solutionValue())
    return true
  }
})
