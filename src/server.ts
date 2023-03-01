import express from 'express';
import { PORT,NODE_ENV } from './config';

const app = express();

app.get('',(req,res)=>{
    res.status(200).json({
        message: 'Hello World'
    })
})

app.listen(PORT,()=>{
    console.log('🚀 Server is up on port : '+PORT);
    console.log('📦 Running in : '+NODE_ENV);
})