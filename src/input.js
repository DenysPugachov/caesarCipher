const readline = require('readline');
const { printResult } = require("./printResult")


let text
let key

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Please enter text : ', answerText => {
  rl.question('Please enter key : ', answerKey => {
    text = answerText
    key = +answerKey
    printResult(text, key)
    rl.close();
  });
});
