import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';



@Controller()
export class UserController{

    constructor(private userService: UserService){}

    
    @Get('user/:id')
    async getProfile(
        @Param('id', ParseIntPipe) id: number
      ){
      return this.userService.getDataUser({id});
    } 

    @Post('user/find')
    async getUser(
      @Body() userData:  { email: string, password: string } 
      ): Promise<{name: string, email: string, password: string, id: number}> {
      return this.userService.findUser(userData)
    }


    @Post('user')
    async createNewAcc(
      @Body() userData: { name: string, email: string, password: string },
    ): Promise<UserModel> {
      return this.userService.createUser(userData);
    }
  
    @Put()
    async updUserInfo(
      @Body() userData: {
        where : { id: number }, 
        data: {
          name?: string, email?: string, password?: string
        }
     }
      ): Promise<UserModel> {
      return this.userService.updUser(userData)
    }
    @Delete(':id')
    async deleteUser(@Param('id') id: number){
      return this.userService.removeUser({id});
    }

  }