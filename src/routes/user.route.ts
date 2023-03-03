import { Router } from "express";
import { getAllUsers, getUser } from "@controllers/user.controller";

const router = Router();

router.get('/users',getAllUsers)
router.get('/users/:id',getUser)

export default router
