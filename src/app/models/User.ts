export default class User {
    id: number;
    username: string;
    email: string;
    role: string;
    token: string;

    constructor (id: number, username: string, email: string, role: string, token: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
        this.token = token;
    }
}