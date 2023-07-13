import HttpStatus from 'http-status-codes';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { dbConnection } from './api/database/util';

const app: Express = express();
dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

fs.readdirSync(path.resolve(__dirname, 'api', 'routes')).forEach((file) => {
    /* eslint-disable */
    const { router, basePath } = require(`./api/routes/${file}`);
    app.use(basePath, router);
});

app.get('/', (req: Request, res: Response) => {
    return res.status(200).send({ message: 'Hello world' });
});

app.get('*', function (req, res) {
    return res.status(404).send({ message: 'APIs route not found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use(function (err: any, req: Request, res: Response) {
    const statusCode = err.status || HttpStatus.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({
        status: err.statusText || HttpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
        errors: err.errors || {},
    });
});
