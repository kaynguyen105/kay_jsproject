function largestOfFour(arr) {
    let store = [];
    for(let i=0;i<arr.length;i++)
    {
      let largestNumber = arr[i][0];
      for(let j=0;j<arr[i].length;j++)
      {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
      }
      store[i] = largestNumber;
    }
    return store;
  }
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);