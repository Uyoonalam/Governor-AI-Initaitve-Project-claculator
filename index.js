#! usr/bin/env node
import inquirer from "inquirer";
const result = await inquirer.prompt([
    {
        message: 'Enter first number', type: 'number', name: 'firstNumber',
    },
    {
        message: 'Enter second number', type: 'number', name: 'secondNumber',
    },
    {
        message: 'Select an operator', type: 'list', name: 'operator', choices: ['add(+)', 'sub(-)', 'mul(*)', 'div(/)', 'pow(^)', 'rem(%)', 'per(%)'],
    },
]);
if (result.operator == 'add(+)')
    console.log(result.firstNumber + result.secondNumber);
else if (result.operator == 'sub(-)') {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator == 'mul(*)') {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator == 'div(/)') {
    console.log(result.firstNumber / result.secondNumber);
}
else if (result.operator == 'pow(^)') {
    console.log(result.firstNumber ** result.secondNumber);
}
else if (result.operator == 'rem(!)') {
    console.log(result.firstNumber % result.secondNumber);
}
else if (result.operator == 'per(%)') {
    console.log((result.firstNumber * result.secondNumber) / 100 + "%");
}
else {
    console.log('Plesae enter a valid output');
}
