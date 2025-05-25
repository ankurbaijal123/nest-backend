import { Controller, Get, Post, Req, Param, Delete, Patch } from "@nestjs/common";
import {Request} from 'express'

@Controller()


export class AppController{
    @Get()
    getUsers(){  
    return "i am user";
    }

    
}