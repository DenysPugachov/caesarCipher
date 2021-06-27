const { caesarCipher } = require("./caesarCipher")

//get user input with node.js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const userPublicKeyRandom = Math.floor(Math.random() * 100)

readline.question('Enter you text to encrypt here:\n', text => {
  console.log(`Your encrypted text: \n\n ${caesarCipher(text, 333)}\n`)
  console.log(`-- Decrypted with public key -${userPublicKeyRandom} -- \n`);
  console.log(`Your decrypted text: \n\n ${caesarCipher(caesarCipher(text, 333), -333)}`)
  readline.close();
});