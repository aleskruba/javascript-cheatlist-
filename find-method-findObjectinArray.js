const people = [
    {
        name:'Ales',
        age:25,
        city:'Brno'
    },
    {
        name:'Adam',
        age:19,
        city:'Prag'
    },{
        name:'Petr',
        age:40,
        city:'Breclav'
    },
    ]


const result = people.find(findPerson)

function findPerson(person) {
    return person.name === 'Ales'
}

console.log(result)
console.log(result.age)
