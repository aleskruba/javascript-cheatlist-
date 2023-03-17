const func1 = (name,date,callback) => {
    
    setTimeout(()=>{
        callback(name,date)
    },1500)
}

const func2 = (name,name2,date,date2,callback) => {
    
    setTimeout(()=>{
        callback(name2,date2)
    },3000)
}

const func3 = (date2,date) => {
    return date2-date
}

func1('ales',Date.now() ,
    (name,date)=>{console.log(name,' was loading ',Date.now() - date)
        func2(name,'pepa',date,Date.now(),
            (name2,date2)=>{console.log('after ales =>' , name2, ' was loading ',Date.now() -date2)
              console.log('total time of loading : ',  func3(Date.now(),date))
            })    
    })
