
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getDataUser(
    idUser: Prisma.UserWhereUniqueInput,
  ): Promise<{name: string, email: string} | null> {
    return this.prisma.user.findUnique({
      where: idUser,
      select: {
        name: true,
        email :true
      }
    });
  }

  async findUser(
      data: Prisma.UserWhereUniqueInput
    ) : Promise<{name: string, email: string, password: string, id: number}> {
    return this.prisma.user.findUnique({
      where:  data,
      select: {
        email: true,
        name: true,
        password: true,
        id: true
      },
    })
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
        data
    });
  }

  async updUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async removeUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }



}
