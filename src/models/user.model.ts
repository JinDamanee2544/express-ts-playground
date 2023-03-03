import mongoose from "mongoose" 
export interface IUserModel extends mongoose.Document{
    name: string;   // for naming the collection
    id: number;
    username: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema<IUserModel>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const UserModel = mongoose.model<IUserModel>('User',userSchema)
