fn main() {
    let token = std::env::args().nth(1).expect("Provide Token");

    println!("{}", token);
}
