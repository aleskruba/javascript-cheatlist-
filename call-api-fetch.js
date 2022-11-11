<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <legend>Receive a user title</legend>
    <input type="text" id="userGet" placeholder="userID"/>
    <button type="button" id="btnGet" onclick="getuserCountry()">find him</button>

    <div id="div1">
        
    </div>
    <br>
    <div id="div2">
        
    </div>
    
    <script>
    async function getuserCountry(){
        const getUser = document.getElementById('userGet').value
        console.log(getUser)
        if (!getUser) {
            alert('no userId'); return;
        }

        const endpoint = new URL(`https://jsonplaceholder.typicode.com/posts/${getUser}`)
    
        endpoint.searchParams.set('token','your TOKEN HERE');
        console.log(endpoint.toString())

       const div1 = document.getElementById('div1').innerHTML =
        `<p>${endpoint} </p>
       
        `
        const response = await fetch(endpoint, {
          headers: {
              "authorization" : "YOUR_TOKEN_HERE",
             
          }
        })
        console.log(response)

        

        if (response.status === 404 ) {
            alert('user not found')
        } 

        const data = await response.json()
        console.log(data)
        const div2 = document.getElementById('div2').innerHTML =
        `<p>${data.id}<p>
         <p>${data.title}<p>
         <p>${data.body}<p>
            `
        
    }
    </script> 
</body>
</html>
