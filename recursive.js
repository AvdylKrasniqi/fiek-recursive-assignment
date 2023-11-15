function generateSequences(n, k) {
    if(n > k || n == 0 || k == 0) return;
    
    function recurse(start, array) {
        if (array.length === n) {
            console.log(array.join(' '));
            return;
        }

        for (let i = start; i <= k; i++) { 
            recurse(i + 1, array.concat(i)); 
        }
    }

    recurse(1, []);

}


const n = 2;
const k = 5;
generateSequences(n,k);
