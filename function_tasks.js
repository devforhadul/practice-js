
/**
 * Task-1
Take four parameters. Multiply the four numbers and then return the result
 */

/* function multiflyFour(n1, n2, n3, n4){
    let r = n1 * n2 * n3 * n4;
    return r
}
const result = multiflyFour(5,6,8,9);
console.log('Four number multifly is: ', result) */

/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

/* function funCondition(number){
    let result = 0;
    if(number % 2 != 0){
        result = number * 2;
    }
    else{
        result = number / 2;
    }
    return result;
}
console.log('Result is : ', funCondition(8)) */


/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

/* function make_avg(numbers){
    let sum = 0;
    for(const num of numbers){
        sum += num / numbers.length;
    }
    return sum;
}

const input = make_avg([80,85,90,98,70])
console.log('This array avarage is:',input) */


/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function count_zero(numbers){
    let sum = 0 ;
    for(const count of numbers){
        if(count == 0){
            sum = sum + count;
        }
    }
    return sum;
}

let binary_str = count_zero("10101010");
console.log(binary_str)


/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

/* function odd_even(number){
    let result;
    if(number %2 === 0){
        result = number+ " is Even number:"
    }
    else{
        result = number + " is Odd number"
    }
    return result;
}

console.log(odd_even(6)) */