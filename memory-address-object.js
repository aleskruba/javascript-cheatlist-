

const user1 = {
    name:"Arthur"  
} 

const user2 = {
    name:"Joe"  
}

const people = [user1,user1,user1,user2,{name:"Joe"}];

people[0].name = 'test'


const knowObjects = new Map()
const generate = function*(){
    while(true){
        let random = Math.random().toString(16).slice(2,8)
        yield `0x${random}`
    }
}

const generator = generate()

const refs = {}

const findRef = object => {
    let address
    if (knowObjects.has(object)) {
        address = knowObjects.get(object)
    }
    else {
        address = generator.next().value
        knowObjects.set(object , address)
        refs[address] = object
    }
    return address
}

const references = people.map(p=> findRef(p))

document.getElementById('app').innerHTML = `
    <h1>Ahoj</h1>
    <div>
        <pre> ${JSON.stringify(people,null,0)}</pre>
        <pre>  ${JSON.stringify(references,null,1)}</pre>
        <pre>  ${JSON.stringify(refs,null,1)}</pre>
     
    </div>


`
