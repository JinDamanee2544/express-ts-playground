import express from 'express';
import { PORT,NODE_ENV } from './config';
import userRouter from './routes/user.route';
import connectDB from './config/db';

const app = express();
app.use(express.json())

connectDB();

const baseRoute = '/api/v1';

app.get('/',(req,res)=>{
    res.status(200).json({
        message: 'Hello World'
    })
})

app.use(baseRoute,userRouter)

app.listen(PORT,()=>{
    console.log('🚀 Server is up on port : ',PORT);
    console.log('📦 Running in : '+NODE_ENV);
})