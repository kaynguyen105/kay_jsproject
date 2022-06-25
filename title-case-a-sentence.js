function titleCase(str) {
    const newStore = str.split(" ");
      const store = [];
      for (let st in newStore) {
        store[st] = newStore[st][0].toUpperCase() + newStore[st].slice(1).toLowerCase();
      }
      return store.join(" ");
    }
    
    titleCase("I'm a little tea pot");