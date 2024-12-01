import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseInterceptors,
  UseGuards
} from '@nestjs/common';
import { PostService } from './post.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Headers} from '@nestjs/common';

@Controller()
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) {}
  

  @Get('post/:id')
  async getPostById(@Param('id') id: string, @Headers() headers: Record <string, string>): Promise<PostModel> {
    console.log(headers);
    return this.postService.post({ id: Number(id) });
  }

  @Get('posts')
  async getAllPosts(){
      return this.postService.posts();
    }


  // @UseGuards(AuthGuard)	
  @Post('createPost')
  @UseInterceptors(FileInterceptor('picture'))
  async createSomePost(
    @Body() postData: { title: string; content?: string; authorEmail: string },
    @UploadedFile() picture: Express.Multer.File
  ): Promise<PostModel> {
    console.log(postData);
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      picture,
      author: {
        connect: { email: authorEmail },
      },
    });
  }


  @Delete('post/del/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }


    @Post('post/comment')
    async createComm(@Body() commentData: { postId: number, content: string}): Promise<any>{
      return this.postService.createComment(commentData)
    }

    // @Delete('user/del/:id')
    // async deleteComment(){
    //   return this.postService.deleteComment({})
    // }


}
