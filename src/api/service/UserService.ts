import HttpStatus from 'http-status-codes';
import UserRepository from '../Repository/UserRepository';
import RegisterUserDTO from '../dto/User/registerUserDTO';
import { IUser } from '../database/models/user';
import constants from '../constants';

export default class UserService {
    private _userRepository: UserRepository;
    constructor() {
        this._userRepository = new UserRepository();
    }

    async registerUser(registerDto: RegisterUserDTO): Promise<IUser> {
        const isEmailExists = await this._userRepository.findOne(<IUser>{ email: registerDto.email });
        if (isEmailExists !== null) {
            return Promise.reject({
                message: constants.validationMessage.DUPLICATE_EMAIL,
                statusCode: HttpStatus.BAD_REQUEST,
            });
        }
        return await this._userRepository.register(<IUser>registerDto);
    }
}
