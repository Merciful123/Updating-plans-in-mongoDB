import express from "express"

import { assignPlanToUser, createUser } from "../Controllers/CreateUser.js"

const router = express.Router()

router.post("/", createUser)

router.put("/", assignPlanToUser)

export default router