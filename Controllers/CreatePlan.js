import PlanModel from "../Models/PlansModel.js"

// Creating Plan

export const createPlan = async (req, res) => {
    const creatingPlan = new PlanModel(req.body)

    try {
        await creatingPlan.save()
        res.status(200).json(creatingPlan)
    } catch (error) {
        res.status(500).json(error)
    }

}