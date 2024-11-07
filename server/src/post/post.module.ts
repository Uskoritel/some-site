import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaService } from '../../prisma/prisma.service';
import { FileService } from 'src/file/file.service';

@Module({
      controllers: [PostController],
      providers: [PostService, PrismaService, FileService],
})
export class PostModule {}
