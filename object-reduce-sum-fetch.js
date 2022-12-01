const url = `https://jsonplaceholder.typicode.com/posts/`

const fetchRepos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const newData = data.reduce((total,repo)=>{
    
    const {userId} = repo;
     
   //  if(userId){
   //        if(total[userId]){
   //         total[userId] = total[userId] +
   // 1
    // }else {
       //     total[userId] = 1
    //    }
     //  }
    
    
        total[userId] = total[userId] + 1 || 1
    
           return total
    },{})
    console.log(newData)
const entries = Object.entries(newData);

console.log(entries.length);
    
}

fetchRepos()
