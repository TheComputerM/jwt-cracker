use jwt_cracker::size;
use random_string::generate;

fn main() {
    let token = std::env::args().nth(1).expect("Provide Token");

    let len = size(token);
    let charset = "1234567890abcdefghijklmnopqrtuvwxzy.";

    let test_signature = generate(len, charset);

    println!("{}", test_signature);
}