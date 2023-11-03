use jwt_cracker::size;

fn main() {
    let token = std::env::args().nth(1).expect("Provide Token");

    let len = size(token);

    println!("{}", len);
}