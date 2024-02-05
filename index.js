require('dotenv').config()
const express = require('express')
const app = express() // all the functionalities of express stored in this app variable 
// const port = 3000  // server port

const gitData = {
    Sunabha
    panda bultu mamata saitkat 
    jfhgkhn
    jkjgfkj 
    kdfjhfbnftbhkj 
    ihbfghbvbn 
    ijfhvuifh 
    ijkbifdhjbvui 
    kjmfbij 
    jhfuhg 
    bhjtuhu 
     ijifghjbi 

}

app.get('/', (req, res) => {  // 
  res.send('Hello World!')
})
app.get('/panda',(req,res) => {
    res.send('hello Sunabha Panda')
})
app.get('/insta',(req,res) => {
    res.send('hello Sunabha Panda in your insta account')
})

app.get('/linkedin',(req,res) => {
    res.send('hello Sunabha Panda in your linkedin account heheheheheheh')
})

app.get('/github',(req,res) => {
    res.json(gitData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})