import express from 'express'

import { create,read,update,dele } from "../controllers/blogController.js";

import { authToken } from "../middleware/authToken.js";

const blogRoutes = express.Router()

blogRoutes.post("/",authToken,create)
blogRoutes.get("/",read)
blogRoutes.put("/:id",authToken,update)
blogRoutes.delete('/:id',authToken,dele)


export default blogRoutes