function findUniq(arr) {
    const counts = {};

    arr.forEach((el) => {
        if (counts[el]){
            counts[el] += 1
        } else {
            counts[el] = 1;
        }
    });

    const unique = Number(Object.keys(counts).sort((a, b) => counts[a] - counts[b])[0]);
    return unique;
}

//tests
findUniq([ 1, 0, 0 ]);
findUniq([ 0, 1, 0 ]);
findUniq([ 0, 0, 1 ]);
findUniq([ 1, 1, 1, 2, 1, 1 ]);
findUniq([ 1, 1, 2, 1, 1 ]);
findUniq([ 3, 10, 3, 3, 3 ]);

/*  Alt solution

    ! I dont like this one, I think its gross   
    
    function findUniq(arr) {
        arr.sort((a,b)=>a-b);
        return arr[0]==arr[1] ? arr.pop() : arr[0];
}
*/
