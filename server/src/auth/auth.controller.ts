import { Controller, UseGuards, Body, Post } from '@nestjs/common';
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
	@Post('login')
	async logIn(
		@Body() userData: { email: string, password: string}
		)
	{
		this.authService.logIn(userData);
	}


}

