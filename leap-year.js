function leapYear(year){
    let result;
    if(year % 4 === 0 || (year % 100 === 0 && year % 400 !== 0)){
        result = year +  " Is Leap year";
    }
    else{
        result = year +  " Is not Leap year";
    }
    return result;
}
const r = leapYear(2012);
console.log(r)