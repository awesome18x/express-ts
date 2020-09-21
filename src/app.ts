import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';



class App {
    public app: express.Application;

    public constructor() {
        this.app = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private database(): void {
        mongoose.connect('mongodb://localhost:27017/express-typescript', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(
            () => console.log('Ket noi database thanh cong'),
            (error) => console.log('Ket noi database loi')
        );
    }

    private routes(): void {
        this.app.get('/', (req, res) => {
            return res.send('<h1>Nguyen Van Duy - duynv1895@gmail.com</h1>')
        })
    }
}

export default new App().app