const people= [
    {id:11,name:`ales`,age:43},
    {id:20,name:`adam`,age:20},
    {id:35,name:`petr`,age:50},
    {id:40,name:`jana`,age:48},
    {id:46,name:`petra`,age:35},
    {id:50,name:`olga`,age:28},
    ]
    

console.log(people.sort(byAge))


const newArray = people.slice(0,2)
console.log(newArray)

function byAge(a,b) {
    if (a.age > b.age){
        return 1;
    } else if (b.age > a.age){
        return - 1;
    } else {
        return 0;
    }
}


let sum = 0   
people.forEach((i,index)=>{
       (sum += i.age)
 })
 
 console.log(sum) 
