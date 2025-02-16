

/* function myfun(n1, n2){
    let t = n1 +n2;
    return t;
}

// const r = myfun(10,20);
console.log('Output is: '+ myfun(10,20)) */

/* function isOdd(number){
    if(number %2 != 0){
        return true
    }
    else{
        return false;
    }
}

console.log(isOdd(6)) */

//-------------------------

/* function conditionInFun(number, double){
    if(double === true){
        const result = number *2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(conditionInFun(5, false)) */


//Sum of all numbers in an array using function

/* function sumOfArray(numbers){
    let sum = 0;
    for(const num of numbers){
        console.log(num)
        sum = sum + num;
    }
    return sum;
}

const sum = sumOfArray([20,40,60,80,100]);
console.log('Sum of array is: ', sum); */

//Return all the even numbers of an array

/* function returnOfEven(numbers){
    const evens = [];

    for(const num of numbers){
        if(num %2 === 0){
            evens.push(num)
        }

    }
    return evens;
}

console.log("Even number in array is: ", returnOfEven([1,2,3,4,5,6,7,8,9,10])) */

//Another
/* function sumOfEvenNum(numbers){
    let sum = 0;
    for(const num of numbers){
        sum += num;
    }
    return sum;
}

console.log("Even number in array is: ", sumOfEvenNum([1,2,3,4,5,6,7,8,9,10])) 
 */