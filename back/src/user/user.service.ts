import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UserDto } from './user.dto'
import { returnUserObject } from './return-user.object'
import { Prisma } from '@prisma/client'
import { hash } from 'argon2'

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async byId(id: number, selectObject: Prisma.UserSelect = {}) {
        const user = this.prisma.user.findUnique({
            where: {
                id
            },
            select: {
                ...returnUserObject,
                favorites: {
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        images: true,
                        slug: true,
                        category: {
                            select: {
                                slug: true
                            }
                        },
                        reviews: true
                    }
                },
                ...selectObject
            }
        })

        if (!user) {
            throw new NotFoundException('User not found')
        }

        return user
    }

    async logVisit(ip: string) {
        console.log(`New visit from IP: ${ip}`);
    }

    async updateProfile(id: number, dto: UserDto) {
        const isSameUser = await this.prisma.user.findUnique({
            where: { email: dto.email }
        })

        if (isSameUser && id !== isSameUser.id) {
            throw new BadRequestException('Email already in use')
        }

        const user = await this.byId(id)

        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                email: dto.email,
                name: dto.name,
                avatarPath: dto.avatarPath,
                phone: dto.phone,
                address: dto.address,
                password: dto.password ? await hash(dto.password) : user.password
            }
        })
    }

    async updateAvatar(id: number, avatar: Express.Multer.File) {
        const avatarPath = `/uploads/${avatar.filename}`

        return this.prisma.user.update({
            where: {
                id
            },
            data: {
                avatarPath
            }
        })
    }

    async toggleFavorite(productId: number, id: number) {
        const user = await this.byId(id)

        if (!user) {
            throw new NotFoundException('User not found')
        }

        const isExists = user.favorites.some(product => product.id === productId)

        await this.prisma.user.update({
            where: {
                id
            },
            data: {
                favorites: {
                    [isExists ? 'disconnect' : 'connect']: {
                        id: productId
                    }
                }
            }
        })

        return { message: 'Success' }
    }
}
