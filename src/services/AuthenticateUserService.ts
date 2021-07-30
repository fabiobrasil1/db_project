import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories"


interface IAuthenticateRequest {

    email: "string";
    password: "string";
}

class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest) {

        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne({
            email
        });
        if(!user){
            throw new Error("Email/Password incorrect");
        }

        const passwordMath = await compare(password, user.password);
        if(!passwordMath) {
            throw new Error ("Email/Password incorrect")
        }
        
        const token = sign(
            {
            email: user.email
            }, "b5262c843b073bde6a72846bc0459d9c",  {    
            subject : user.id, 
            expiresIn: "1d",
            } 
        );
        

        return token;

    }    
}

export { AuthenticateUserService }