import { Request, Response } from "express";
import { createNewUser, fetchAllUsers } from "@services/user.service";
import { IUser } from "@interfaces/user.interface";

const getAllUsers = async(req:Request,res:Response) => {
    try {
        const users:IUser[] = await fetchAllUsers()
        return res.status(200).json({
            data: users
        })
    } catch {
        return res.status(500).json({
            msg: 'Cannot fetch users'
        })
    }
}

const createUser = async(req:Request,res:Response) => {
    try {
        const userData:IUser = req.body;
        const newUser:IUser = await createNewUser(userData);
        return res.status(200).json({
            data: newUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Cannot create users'
        })
    }
}

export { getAllUsers ,createUser}