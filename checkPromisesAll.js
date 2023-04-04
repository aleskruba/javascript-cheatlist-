const first  = () => {
    return new Promise((resolve,reject)=>{
        if (1+1==2){
            resolve('yes')
        }else{
            reject('no')
        }
    })
}

const second  = () => {
    return new Promise((resolve,reject)=>{
        if (1+1==2){
            resolve('yes')
        }else{
            reject('no')
        }
    })
}

const third  = () => {
    return new Promise((resolve,reject)=>{
        if (1+1==2){
            resolve('yes')
        }else{
            reject('yes')
        }
    })
}

const arrayofPromises=[first,second,third]

console.log(arrayofPromises)

first()
    .then(result => console.log(result))
    .catch(err => console.log(err))
second()
    .then(result => console.log(result))
    .catch(err => console.log(err))
third()
    .then(result => console.log(result))
    .catch(err => console.log(err))


const checkPromises = (promises) => {

    const outputs = []
    let count = 0
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,index)=>{
            promise.then((value)=>{
                outputs[index] = value
                count++
           
                resolve(outputs)
           
            }).catch(reject)
        })

    })
}

const promises =  [
    first(),second(),third()
]

checkPromises(promises)
    .then(console.log)
    .catch(err=>console.log(err))
