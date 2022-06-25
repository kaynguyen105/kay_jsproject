function findLongestWordLength(str) {
let wordc = str.split(" ")
let maxStr = 0
for (let i = 0; i < wordc.length; i++) {
    if (wordc[i].length > maxStr) {
      maxStr = wordc[i].length;
    }
  }

  return maxStr;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog")