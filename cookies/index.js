const express = require('express');
const cookieParser = require('cookie-parser')
const csurf = require("csurf")
const csrfProtection = csurf({ cookie: { httpOnly: true } })
const app = express();
const PORT = 3000

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.get('/',csrfProtection,  (req,res)=>{
    res.cookie("key1","qwerty",{httpOnly:true})
  

      res.send(`<form action="/transfer-money" method="POST">
      <input type="text" name="amount" placeholder="amount">
      <input type="text" name="to" placeholder="Send to...">
      <input type="hidden" name="_csrf" value="${req.csrfToken()}">

      <button>Submit</button>
    </form>`)
})

app.post("/transfer-money", csrfProtection, (req, res) => {
    //console.log(req.cookies)
    if (req.cookies.key1 === "qwerty") {
      res.send("Success!")
    } else {
      res.send("Failed!")
    }
  })

  app.use((err, req, res, next) => {
    if (err.code !== "EBADCSRFTOKEN") return next(err)
  
    res.status(403)
    res.send("CSRF attack detected!")
    console.log("CSRF attack detected!")

  })

app.listen(PORT,()=>{console.log(`listen on port ${PORT}`)})
