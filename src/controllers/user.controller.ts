import { Request, Response } from "express";
import { User } from "@models/user.model";
import { fetchAllUsers, getUserByID } from "@services/user.service";

const getUser = (req:Request,res:Response) => {
    const id = req.params.id;
    const user:User = getUserByID(Number(id));

    return res.status(200).json({
        data: user
    })
}

const getAllUsers = (req:Request,res:Response) => {
    const users:User[] = fetchAllUsers();
    return res.status(200).json({
        data: users
    })
}

export { getUser, getAllUsers }