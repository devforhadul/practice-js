
function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mul(num1, num2){
    return num1 * num2;
}
function divi(num1, num2){
    return num1 / num2;
}
function calculator(a, b, ot){
    if(ot === 'add'){
        return add(a,b)
    }
    else if(ot === 'sub'){
        return sub(a,b)
    }
    else if(ot === 'mul'){
        return mul(a,b)
    }
    else if(ot === 'divi'){
        return divi(a,b)
    }
    else{
        return "Invaid input"
    }
}

const result = calculator(50,5,'divi');
console.log(result);

