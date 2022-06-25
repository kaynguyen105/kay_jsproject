function chunkArrayInGroups(arr, size) {
    let store = [];
    for (let i = 0; i < arr.length; i += size) {
      store.push(arr.slice(i, i + size));
    }
    return store;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);