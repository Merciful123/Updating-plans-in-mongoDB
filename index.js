import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


// importing routes

import UserRoute from "./Routes/UserRoute.js"
import PlanRoute from "./Routes/PlanRoute.js"
import  AssignPlanRoute  from "./Routes/AssignPlanRoute.js";


const app = express()


app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
dotenv.config()



mongoose
    .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => 
        app.listen(process.env.PORT || 8000, () => 
        console.log(`Sever listening at port ${process.env.PORT}`)
    )
)
    .catch((error) => console.error(error))


// creating user


app.use("/createuser", UserRoute)


// creating plan


app.use("/createplan", PlanRoute)


// Assigning plan


app.use("/assignplan", AssignPlanRoute)