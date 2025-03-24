const express = require('express');
require('dotenv').config();
const route = require("./routes/Ai.routes")
const cors = require('cors')

const app = express();

const corsOption = {
    origin : "https://code-review-frontend-lilac.vercel.app",
    methods : "GET,POST,PUT,DELETE",
    allowedHeaders : "Content-Type,Authorization",
    credentials : true
}
app.use(cors(corsOption))

app.use(express.json())

app.get("/",(req , res)=>{
   res.send("Hello World")
})

app.use("/ai",route)



app.listen(5000 ,()=>{
    console.log("Server is running on port 5000")
})