export const calculator = {
    'X': (num, mult) => {return num*mult > 0 ? num*mult : 0},
    '%': (num, mult) => {return num/mult > 0 ? num/mult : 0},
    '-': (num, mult) => {return num-mult > 0 ? num-mult : 0},
    '+': (num, mult) => {return num+mult > 0 ? num+mult : 0}
}