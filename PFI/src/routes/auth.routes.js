import express from "express"
import { login } from "../controladores/auth.controller.js"

const router = express.Router()

router.post("/login", login)

export default router;