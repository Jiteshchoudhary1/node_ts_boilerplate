import { Response, Request } from 'express';
import HttpStatus from 'http-status-codes';
import constants from '../constants/index';
/* eslint-disable */
export function errorHandler(error: any, req: Request, res: Response): Response {
    try {
        const response = { ...constants.defaultServerResponse };
        response.status = error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
        response.message = error.message || constants.validationMessage.INTERNAL_SERVER_ERROR;
        response.success = false;
        return res.status(response.status).json(response);
    } catch (error) {
        return res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json({ message: constants.validationMessage.INTERNAL_SERVER_ERROR });
    }
}
