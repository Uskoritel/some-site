import { Controller, UseGuards, Body, Post, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User, Prisma } from '@prisma/client';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

	constructor(private authService: AuthService){}

	@Post('register')
	async register(
		@Body() userData: { name: string, email: string, password: string}
		)
	{	
		return this.authService.register(userData);
	}

	@UseGuards(AuthGuard)	
	@Get('user')
	async getUser(@Request() req){
		return req.user
	}
    
	@Post('login')
	async logIn(
		@Body() userData: { email: string, password: string}
		)
	{
		this.authService.logIn(userData);
	}


}

