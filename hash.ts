import bcrypt from "bcryptjs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a password:", async (password) => {
  if (password.length < 6) {
    console.log("Password must be at least 6 characters long");
    rl.close();
    return;
  }
  const hashed = await bcrypt.hash(password, 10);
  console.log(hashed);
  rl.close();
});
