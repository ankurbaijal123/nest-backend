
import { Controller, Get, Post, Req, Param, Delete, Patch, Body } from "@nestjs/common";
import {Request} from 'express'
import { UserService } from "./user.service";
import { UpdateUserDTO } from "./update-user.dto";
import { CreateUserDTO } from "./create-user.dto";

@Controller('/user')


export class UserController{
    constructor (private userService : UserService) {}

    @Get()
    getUsers(){  
        return this.userService.get();
    }

    @Post()
    storeUser(@Body() createUserDTO: UpdateUserDTO){
        
        return this.userService.createUser(createUserDTO);
    }
    @Get('/:userId')
    getUser(@Param() param :{userId: number}){
        return this.userService.getUser(param)
    }
    @Patch('/:userId')
    update(@Body() createUserDTO : CreateUserDTO, @Param() param: {userId: number}){
        return this.userService.updateUser(createUserDTO, param)
    }

    
    @Delete('/:userId')
    deleteUser(@Param() param : {userId: number}){
        return this.userService.deleteUser(param)
    }
}