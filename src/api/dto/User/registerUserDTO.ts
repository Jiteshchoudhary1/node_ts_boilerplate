export default class RegisterUserDTO {
    name: string;
    email: string;
    /* eslint-disable */
    constructor(data?: any) {
        this.name = data.name;
        this.email = data.email;
    }
}
