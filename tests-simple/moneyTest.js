import {formatCurrency} from "../scripts/utils/money.js";

console.log('Test suite: formartCurrency')

console.log('Converts cemts into dollars:')

if (formatCurrency(2095) === '20.95') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('Works with 0:')

if (formatCurrency(0) === '0.00') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('Rounds up the nearest cent:')

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('Round to the zero:')

if (formatCurrency(2000.4) === '20.00') {
    console.log('passed')
} else {
    console.log('failed')
}


console.log('Test with a negative number:')

if (formatCurrency(-1000) === '-10.00') {
    console.log('passed')
} else {
    console.log('failed')
}