import express, {Request, Response} from "express"
import cors from "cors"
import "dotenv/config"

// MongoDB Config
const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:<password>@chownow-cluster.lfp4u9r.mongodb.net/?retryWrites=true&w=majority&appName=chownow-cluster";


const app = express()
// Auto converts body of any request to api server to json
app.use(express.json())
app.use(cors())

app.get("/test", async (req: Request, res: Response) =>{
    res.json({message: "Hello!"})
})

app.listen(7000, ()=> {
    console.log("Server started on localhost: 7000")
})