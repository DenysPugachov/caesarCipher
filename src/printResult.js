const { caesarCipher } = require("./caesarCipher")


function printResult(text, key) {
  console.log(`Your encrypted text: \n\n ${caesarCipher(text, key)}\n`)
  console.log(`-- Decrypted with private key -${key} -- \n`)
  console.log(`Your decrypted text: \n\n
  ${caesarCipher(caesarCipher(text, key), -key)}`)
}


module.exports = { printResult }