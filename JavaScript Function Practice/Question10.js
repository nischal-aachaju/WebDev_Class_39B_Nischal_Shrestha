const add = (a, b) => { console.log(`Addition: ${a} + ${b} = ${a + b}`); };
const subtract = (a, b) => { console.log(`Subtraction: ${a} - ${b} = ${a - b}`) };
const multiply = (a, b) => { console.log(`Multiplication: ${a} * ${b} = ${a * b}`) };
const divide = (a, b) => { 
     if (b == 0) { console.log("Zero division error !!"); return }
    console.log(`Division: ${a} / ${b} = ${a / b}`)
 };

const calculate = (a, b, operationCallback) => {
    
   
    operationCallback(a, b);
}

calculate(2,0,add);

