import express from "express"
import { createPlan } from "../Controllers/CreatePlan.js"

const router = express.Router()


router.post("/", createPlan)


export default router