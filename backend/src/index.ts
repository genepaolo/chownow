import express, {Request, Response} from "express"
import cors from "cors"
import "dotenv/config"

// MongoDB Config
import mongoose from "mongoose"
mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("Connected to MongoDB!"))


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