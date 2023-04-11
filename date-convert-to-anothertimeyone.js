function calcTime(city,offset){
    var b = new Date()
    var utc = b.getTime()+(b.getTimezoneOffset()*60000)
    var nd = new Date(utc+(3600000*offset))
    return 'the local time of'+city+' is ' +nd.toLocaleString()    
}

console.log(calcTime('argentina','-3'))
