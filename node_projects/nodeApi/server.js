const express = require('express')
const app = express()


//API Routes
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})



app.listen(4000, ()=> {
     console.log("Node API App is running on port 4000")
})