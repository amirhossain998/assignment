function feetToMile (feet){
    var mile = feet / 5280;
    return mile;
}
var totalMile = feetToMile(10560);
console.log(totalMile);