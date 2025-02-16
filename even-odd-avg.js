
/**
 * give some array list
 * FInd even avarage
 */
function evenAvg(numbes){
    let evenis = [];
    for(const num of numbes){
        if(num %2 === 0){
            evenis.push(num)
        }
    }
    let sum = 0;
    for(const even of evenis){
        sum = sum + even;
    }
    let avarage = sum / evenis.length;
    return avarage;
}

const value = evenAvg([27, 22, 24, 29, 28, 30]);
console.log("Average is: ", value)


