import { Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {

	constructor(
				private userService: UserService,
				private jwtService: JwtService
				) {}

	async register(data: Prisma.UserCreateInput): Promise<{access_token: string}>
	{
		const userValid = await this.userService.findUser({email: data.email})
		if (userValid?.email === data.email) {
			throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
		}
		const user = await this.userService.createUser(data);
		const payload = { sub: user.id, username: user.name }
		return {
			access_token: await this.jwtService.signAsync(payload)
		}

	}
	
	async logIn( userData: {email: string, password: string}
		): Promise<{access_token: string}>
	
	{
		const user = await this.userService.findUser({email: userData.email})
		if (user?.password !== userData.password) {
			throw new UnauthorizedException();
		}

		const payload = { sub: user.id, username: user.name }
		return {
			access_token: await this.jwtService.signAsync(payload)
		}

	}

}
