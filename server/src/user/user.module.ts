import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../../prisma/prisma.service';
import { FileService } from 'src/file/file.service';


@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
