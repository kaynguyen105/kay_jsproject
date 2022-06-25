function mutation(arr) {
    let storel = arr[1].toLowerCase();
     let storela = arr[0].toLowerCase();
     for (let i = 0; i < storel.length; i++) {
       if (storela.indexOf(storel[i]) < 0) return false;
     }
     return true;}
   
   mutation(["hello", "hey"]);