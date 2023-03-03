const people = [ 
    {
    name:'Jiri',
    salary:8000
    },
    {
    name:'ales',
    salary:10000
   },
    {
    name:'adela',
    salary:13000
   },
   {
    name:'adam',
    salary:15000
   },
   {
    name:'pepa',
    salary:20000
   },
]



const resultMax = people.reduce( (acc,val)=>{
    return ( acc>val? acc:val)
})
const resultMin = people.reduce( (acc,val)=>{
    return ( acc<val? val:acc)
})


const {salaryTotal} = people.reduce( (acc,val)=>{
    const {name,salary} = val
            acc.salaryTotal += salary
            return acc
            
    },{
        salaryTotal:0
    })



console.log(resultMax.name, ' has got the biggest salary', resultMax.salary)
console.log(resultMin.name, ' has got the smallest salary', resultMin.salary)
console.log('the total Salary is : ',salaryTotal)
