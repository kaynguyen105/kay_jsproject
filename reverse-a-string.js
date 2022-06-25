function reverseString(str) {
  let revertString = "";
  for(let i = str.length - 1; i >= 0; i--)
  {
    revertString += str[i];
  }
  return revertString;
}

reverseString("Greetings from Earth");