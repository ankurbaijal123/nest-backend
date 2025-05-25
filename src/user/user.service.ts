import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDTO } from './create-user.dto';
import { UpdateUserDTO } from './update-user.dto';



@Injectable()
export class UserService {
    get(){
        return "i am user";
    }
    createUser(createUserDTO : CreateUserDTO){
        return createUserDTO
    }
    getUser(param : {userId: number}){
        return param
    }
    updateUser(updateUserDTO :UpdateUserDTO, param: {userId: number}){
      updateUserDTO.emailId = "ankur.baijal11@gmail.com"

        return {body : updateUserDTO, parameter : param}
    }

    deleteUser(param: {userId: number}){
        return JSON.stringify(param.userId) + "deleted"}
}
