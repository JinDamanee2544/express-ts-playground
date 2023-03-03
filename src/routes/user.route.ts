import { Router } from "express";
import { createUser, getAllUsers } from "@controllers/user.controller";

const router = Router();

router.get('/users',getAllUsers)
// router.get('/users/:id',getUser)
router.post('/users',createUser)

export default router
