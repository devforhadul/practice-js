
function noDuplicate(array){
    let result = [];
    for(const arr of array){
        if(result.includes(arr) === false){
            result.push(arr);
        }
    }
    return result;
}

const ans = noDuplicate(["Alice", "Bob", "Charlie", "Alice", "Bob"]);
console.log(ans)