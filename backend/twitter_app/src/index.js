import { PORT } from "./config/serverConfig.js";
import express from "express"
import v1Router from './routes/v1/v1Routes.js'
import v2Router from './routes/v2/v2Routes.js'


const app=express();

app.use('/api/v1',v1Router)
app.use('/api/v2',v2Router)


app.listen(PORT,()=>{
    console.log("Server is running on port 3001")
})