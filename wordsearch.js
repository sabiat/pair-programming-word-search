const wordSearch = (letters, word) => {
    if (letters.length <= 0) {
        return undefined;
      }

  const horizontalJoin = letters.map((ls) => ls.join(""));
//   console.log(horizontalJoin);
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  let newArr = [];
  for (let i = 0; i < letters[0].length; i++) {
      let result = []
    for (let j = 0; j < letters.length; j++) {
      result.push(letters[j][i]);
    }
    newArr.push(result);
  }
//   console.log(newArr);
  const verticalJoin = newArr.map((letter) => letter.join(""))
//   console.log(verticalJoin);
  for (const item of verticalJoin) {
      if (item.includes(word)) {
          return true;
      }
  }
  return false;
};

// wordSearch([
//   ["A", "W", "C", "F", "Q", "U", "A", "L"],
//   ["S", "E", "I", "N", "F", "E", "L", "D"],
//   ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//   ["H", "M", "J", "T", "E", "V", "R", "G"],
//   ["W", "H", "C", "S", "Y", "E", "R", "L"],
//   ["B", "F", "R", "E", "N", "E", "Y", "B"],
//   ["U", "B", "T", "W", "A", "P", "A", "I"],
//   ["O", "D", "C", "A", "K", "U", "A", "S"],
//   ["E", "Z", "K", "F", "Q", "U", "A", "L"],
// ]);

// console.log(wordSearch([
//     ["A", "S", "C", "F", "Q", "U", "A", "L"],
//     ["E", "E", "I", "N", "F", "E", "L", "D"],
//     ["K", "I", "C", "F", "Q", "U", "A", "L"],
//     ["N", "N", "J", "T", "E", "V", "R", "G"],
//     ["L", "F", "C", "S", "Y", "E", "R", "L"],
//     ["U", "E", "R", "E", "N", "E", "Y", "B"],
//     ["L", "L", "T", "W", "A", "P", "A", "I"],
//     ["I", "D", "C", "A", "K", "U", "A", "S"],
    
//   ], 'SEINFELD'));

module.exports = wordSearch;
