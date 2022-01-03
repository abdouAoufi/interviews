const db: string[] = ["food", "book", "full", "fool", "word", "fast"];

const search = (keyword: string = "foo") => {
  const result: string[] = [];
  db.forEach((word) => {
    const subword = word.split("");
    let matchCount = 0;
    for (let i = 0; i < 2; i++) {
      if (subword[i] === keyword[i]) {
        matchCount++;
      }
    }
    if (matchCount >= 2) result.push(word);
    matchCount = 0;
  });
  return result;
};

const result = search("fa");
console.log(result);
