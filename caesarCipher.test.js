const { caesarCipher } = require("./caesarCipher")


describe("Testing CaesarCipher functionality", () => {

  const key = 3

  // beforeEach(() => {
  // });

  test("CaesarCipher should be defined", () => {
    expect(caesarCipher).toBeDefined();
    expect(caesarCipher).not.toBeUndefined();
  });

  test("Should decrypt text(without spaces) to the same value", () => {
    const text = "reversibility"
    const encryptedText = caesarCipher(text, 4)
    expect(caesarCipher(encryptedText, -4)).toEqual(text)
  })

  test("Should decrypt text(include spaces) to the same value", () => {
    const text = "denys pugachov"
    const text2 = "some random text form internet"
    const encryptedText = caesarCipher(text, 4)
    const encryptedText2 = caesarCipher(text2, 5)
    expect(caesarCipher(encryptedText, -4)).toEqual(text)
    expect(caesarCipher(encryptedText2, -5)).toEqual(text2)
  })

  test("Should except keys > 26", () => {
    const key = 34
    const text = "some random text form internet"

    const encryptedText = caesarCipher(text, key)
    expect(caesarCipher(encryptedText, -key)).toEqual(text)
  })

  test("Should except capital letters", () => {
    const key = 34
    const text = "Denys Pugachov"
    const encryptedText = caesarCipher(text, key)
    expect(caesarCipher(encryptedText, -key)).toEqual(text)
  })

  test("Text with numbers (first method), throw error", () => {
    expect(() => { caesarCipher("Den21", key) }).toThrow()
    expect(() => { caesarCipher("Den21", key) }).toThrowError("Only plain text")
    expect(() => { caesarCipher("Den21", key) }).toThrowError(/plain text/)
  })

  test("Text with symbols, throw error", () => {
    function encryptTextWithNumbers() {
      caesarCipher("Den!!!", key)
    }
    expect(encryptTextWithNumbers).toThrow()
    expect(encryptTextWithNumbers).toThrowError("text")
    expect(encryptTextWithNumbers).toThrowError(/text/)
  })

})