import UserModel, { IUser } from '../database/models/user';

export default class UserRepository {
    async findOne(user: IUser) {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        const filter: any = {};

        if (user.name) {
            filter['name'] = user.name;
        }
        if (user.email) {
            filter['email'] = user.email;
        }
        return await UserModel.findOne(filter);
    }
    async register(user: IUser): Promise<IUser> {
        return await UserModel.create(user);
    }
}
