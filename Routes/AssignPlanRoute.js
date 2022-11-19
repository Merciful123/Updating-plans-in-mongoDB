import express from 'express'

import { assignPlanToUser } from '../Controllers/AssignPlan.js'

const router = express.Router()


router.post("/", assignPlanToUser)

export default router