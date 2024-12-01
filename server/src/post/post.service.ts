import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Post, Prisma, Comment } from '@prisma/client';
import { FileService } from 'src/file/file.service';

@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
    private fileService: FileService
  ) {}

  async post(
    postWhereUniqueInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
      include: {
        comments: true
      }
    });
  } 


  async posts(): Promise<any[] | null> {
    return this.prisma.post.findMany({
      select : {
        title: true,
        content: true,
        picture: true,
        created_at : true,
        _count: {
          select: {
            comments: true
          }
        }
       }
    });
  }

  async createPost(data: any): Promise<any> {
    data.picture = this.fileService.create(data.picture);
    return this.prisma.post.create({
      data,
    });
  }

  async updatePost(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<Post> {
    const { data, where } = params;
    return this.prisma.post.update({
      data,
      where,
    });
  }

  async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.prisma.post.delete({
      where,
    });
  }

  async createComment(data: {postId: number, content: string}): Promise<any>{
    return this.prisma.comment.create({
      data
    })
  }

  async deleteComment(where: Prisma.CommentWhereUniqueInput): Promise<any>{
    return this.prisma.comment.delete({
      where,
    })
  }



}
