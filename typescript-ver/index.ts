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
});
