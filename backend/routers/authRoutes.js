import express from 'express'

import { registerUser } from '../controllers/authController.js'

const authRoutes = express.Router()

authRoutes.post('/register',registerUser)

export default authRoutes
