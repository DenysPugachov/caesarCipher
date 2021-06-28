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



module.exports = { caesarCipher }
