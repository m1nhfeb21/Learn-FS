const bcrypt = require("bcrypt");

async function main() {
  const password = "123456";

  const hashedPassword = await bcrypt.hash(password, 12);

  console.log("Hash:", hashedPassword);

  const isCorrect = await bcrypt.compare("123456", hashedPassword);

  console.log("Password đúng?", isCorrect);
}

main().catch(console.error);
