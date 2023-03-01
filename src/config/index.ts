import dotenv from 'dotenv';

export const NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({
    path: `.env.${NODE_ENV}`,
});

export const PORT = process.env.PORT || 8080;
