import inquirer from 'inquirer';

const questions: inquirer.QuestionCollection = [
    {
        type: 'input',
        name: 'fibonacci',
        message: 'Enter a number to see if this is a Fibonacci number',
        validate: (input: string) => {
            if (isNaN(Number(input))) {
                return 'Please enter a number';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'inverse',
        message: 'Enter a text to invert it',
        validate: (input: string) => {
            if (input.length === 0) {
                return 'Please enter a text';
            }
            return true;
        }
    }
]

const isFibonacci = (number: number): boolean => {
    let a = 0;
    let b = 1;
    let c = a + b;
    while (c <= number) {
        if (c === number) {
            return true;
        }
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

inquirer.prompt(questions).then((answers) => {
    const number = Number(answers.fibonacci);
    console.log(`Is ${number} a Fibonacci number? It's ${isFibonacci(number)}`);
    console.log(`Inverted text: ${answers.inverse.split('').reverse().join('')}`);
});
