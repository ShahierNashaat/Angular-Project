export class User{
    username:string
    email:string
    password:string
    confirmPassword:string
    socialField:string

    constructor(username:string, email:string, password:string, confirmPassword:string, socialField:string)
    {
        this.username = username
        this.email = email
        this.password = password
        this.confirmPassword = confirmPassword
        this.socialField = socialField
    }
}