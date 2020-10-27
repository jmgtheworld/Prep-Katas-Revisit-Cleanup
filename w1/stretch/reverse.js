const args = process.argv;

const reverse = function(args) {
  let newWord = '';
  for (let i = 2; i < args.length; i++) {
    for (let j = args[i].length - 1; j >= 0; j--) {
      newWord += args[i][j];
    }
    newWord += "\n";
  }
  return newWord;
};

console.log(reverse(args));