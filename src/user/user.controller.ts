
import { Controller, Get, Post, Req, Param, Delete, Patch } from "@nestjs/common";
import {Request} from 'express'

@Controller('/user')


export class UserController{
    @Get()
    getUsers(){  
    return "i am user";
    }

    @Post()
    storeUser(@Req() req: Request){
        console.log(req.body)
        return req.body;
    }
    @Get('/:userId')
    getUser(@Param() userId: number){
        return userId
    }
    @Patch('/:userId')
    updateUser(@Req() req: Request, @Param() userId: number){
        console.log(req.body)
        req.body.emailId = "ankurbaijal@gamil.com"
        return req.body;
    }

    
    @Delete('/:userId')
    deleteUser(@Param() userId: number){
        return JSON.stringify(userId) + "deleted"
    }
}