function findElement(arr, func) {
    let number = 0;
  
    for (let i = 0; i < arr.length; i++) {
      number = arr[i];
      if (func(number)) {
        return number;
      }
    }
  
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);