import express from 'express';
import UserController from '../controller/UserController';

const { register } = new UserController();

const router = express.Router();

router.post('/register', register);
module.exports = { router, basePath: '/api/v1/user' };
