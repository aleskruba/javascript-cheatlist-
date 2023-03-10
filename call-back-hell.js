
const nameFunc = (callback) => {
    console.log('Waiting fot API names')
    setTimeout(()=>{
        console.log('we waited 2 sec')
        const name = 'Ales'
        callback(name)
    },2000)
}

const jobsFunc = (callback) => {
    console.log('Waiting fot API jobs')
    setTimeout(()=>{
        console.log('we waited 1 sec')
        const job = 'developer'
        callback(job)
    },2000)
}

const salaryFunc = (callback) => {
    console.log('Waiting fot API salaries')
    setTimeout(()=>{
        console.log('we waited 3 sec')
        const salary = 5000
        callback(salary)
    },2000)
}

nameFunc(name=>{console.log('name is ',name)
        jobsFunc( j=> {console.log(name,"' job is ",j)
            salaryFunc(s=> {console.log(name,"' salary is as a ",j," is " ,s) 
                
            })
        })
})
