import { IUser } from '@/interfaces/user.interface'
import { UserModel } from '@models/user.model'

const fetchAllUsers = async() => {
    const users:IUser[] = await UserModel.find({})
    return users
}

const createNewUser = async(user:IUser) => {
    const newUser:IUser = await UserModel.create(user)
    return newUser
}

export { fetchAllUsers ,createNewUser}
