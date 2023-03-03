import inquirer

def is_fibonacci(number: int) -> bool:
    a, b = 0, 1
    while a < number:
        a, b = b, a + b
    return a == number

def main():
    questions = [
        inquirer.Text("number", message="Enter a number to check if it is on the Fibonacci sequence"),
        inquirer.Text("text", message="Enter a text to invert"),
    ]
    answers = inquirer.prompt(questions)
    if answers is None:
        return
    number = int(answers["number"])
    if is_fibonacci(number):
        print(f"{number} is on the Fibonacci sequence")
    else:
        print(f"{number} is not on the Fibonacci sequence")
    text = answers["text"]
    print(f"Inverted text: {text[::-1]}")


if __name__ == "__main__":
    main()