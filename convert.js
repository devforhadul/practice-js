
function inchToFeet(inch){
    const feet = inch /12;
    const feetIs = parseInt(feet);
    const inchIs = inch % feetIs;
    const result = feetIs + "ft"+ inchIs+ "inch"
    return result;
}
const r = inchToFeet(75)
console.log(r)