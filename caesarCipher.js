function getEncryptedChar(char, key) {
  //code point character "a" in UTF-16
  let a_codePoint

  //is Capital letter
  if (/^[A-Z]*$/.test(char)) {
    a_codePoint = "A".charCodeAt(0)
  } else if (/^[a-z]*$/.test(char)) {
    a_codePoint = "a".charCodeAt(0)
  } else {
    throw Error("Only plain text allowed.")
  }

  const char_codePoint = char.charCodeAt(0)
  const indexOfShiftedChar = char_codePoint - a_codePoint
  return a_codePoint + ((indexOfShiftedChar + key) % 26)
}


function caesarCipher(text, key) {
  let encryptedString = ""

  if (key < 0) {
    // (0 < key < 26)
    key = 26 - (-key % 26)
  }

  text.split("").forEach(ch => {
    if (ch === " ") {
      encryptedString += " "
    } else {
      const encryptedChar = getEncryptedChar(ch, key)
      encryptedString += String.fromCharCode(encryptedChar)
    }
  })

  return encryptedString
}


//get user input with node.js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter you text to encrypt here:\n', text => {
  console.log(`Your encrypted text: \n\n ${caesarCipher(text, 333)}\n`)
  console.log("--Revert-- \n");
  console.log(`Your decrypted text: \n\n ${caesarCipher(caesarCipher(text, 333), -333)}`)
  readline.close();
});


module.exports = { caesarCipher }
