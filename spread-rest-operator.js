
function sumOne(a,b) {
    return a + b
}

console.log(sumOne(1,2,3)) // - treti cislo vynecha
var myA = [5,4,8,9];
console.log(sumOne(...myA))
/// spread prevede z listu, secte dve prvni cisla o zbytek se nestara



console.log('-----------------')


function sumTwo(a,b, ...args){
    console.log(args)
    let multi = a*b
    let sum = 0; 
    for (const arg of args ){
        sum+=arg
    }
    return [sum,multi]
}


console.log(sumTwo(8,7,2,1,1,1))
// vynecha a,b

