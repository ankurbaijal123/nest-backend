
import { Controller, Get, Post, Req, Param, Delete, Patch, Body, ParseIntPipe } from "@nestjs/common";
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
    storeUser(@Body() createUserDTO: CreateUserDTO){
        
        return this.userService.createUser(createUserDTO);
    }
    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number){
        return this.userService.getUser(userId)
    }
    @Patch('/:userId')
    update(@Body() updateUserDTO : UpdateUserDTO, @Param("userId", ParseIntPipe) userId : number){
        return this.userService.updateUser(updateUserDTO, userId)
    }

    
    @Delete('/:userId')
    deleteUser(@Param() param : {userId: number}){
        return this.userService.deleteUser(param)
    }
}