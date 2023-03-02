const array = [5,3,8,2,1,0,6,20]

const largest = array.reduce((acc,val)=>{
    return(acc>val ? acc:val)
})

console.log(largest)


let max = array[0]
    for (i in array) {
        if (array[i]>max){
            max = array[i]
        }
    }


console.log(max)

console.log(Math.max(...array))
console.log(Math.max.apply(Math, array))
