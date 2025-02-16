/**
 * Looping technique
 * 1. for loop
 * 2. while
 * 3. do while --> ignore
 * 4. for of --> using in aray
 * 5.for in --> using in object
 */
const friends = ['Forhad', 'Riad', 'jalina', 'Imran', 'Mostafa']

for( const friend of friends){
    //console.log(friend)
}

for(let i = 0; i < friends.length; i++){

    console.log(friends[i])
}

const numbers = [5, 10, 340, 50, 450, 38]
let u = 0;
while( u < numbers.length){
    console.log(numbers[u])
    u++
}