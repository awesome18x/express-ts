import express, { Request, Response, NextFunction } from 'express';

const app = express();


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Server building by express and typescript</h1>');
})

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
})