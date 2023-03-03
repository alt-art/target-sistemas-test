use inquire::{Text, required, parse_type, parser::CustomTypeParser};

fn check_fibonacci(number: u32) -> bool {
    let mut a = 0;
    let mut b = 1;
    let mut c = 0;
    while c < number {
        c = a + b;
        a = b;
        b = c;
    }
    c == number
}

fn main() {
    let input_number = Text::new("Enter a number to check if it is in the fibonacci sequence")
        .with_validator(required!())
        .prompt().unwrap();
    
    let parser: CustomTypeParser<u32> = parse_type!(u32);
    let number = parser(&input_number).unwrap();

    if check_fibonacci(number) {
        println!("{} is in the fibonacci sequence", number);
    } else {
        println!("{} is not in the fibonacci sequence", number);
    }

    let text = Text::new("Enter a text to invert")
        .with_validator(required!())
        .prompt().unwrap();

    let inverted_text: String = text.chars().rev().collect();

    println!("Inverted text: {}", inverted_text);
}
