import { Response, Request } from 'express';
import constants from '../constants';
import HttpStatus from 'http-status-codes';
import { errorHandler } from '../errorHandler/errorHanlder';
import UserService from '../service/UserService';
import RegisterUserDTO from '../dto/User/registerUserDTO';

export default class UserController {
    async register(req: Request, res: Response) {
        const response = { ...constants.defaultServerResponse };
        try {
            const userService = new UserService();
            const registerDto = new RegisterUserDTO({ ...req.body });
            const responseFromService = await userService.registerUser(registerDto);
            response.status = HttpStatus.OK;
            response.message = constants.controllerMessage.SUCCESS;
            response.data = responseFromService;
            return res.status(response.status).json(response);
        } catch (error) {
            return errorHandler(error, req, res);
        }
    }
}
