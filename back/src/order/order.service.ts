import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnProductObject } from 'src/product/return-product.object';

@Injectable()
export class OrderService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll() {
        return this.prisma.order.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: returnProductObject
                        }
                    }
                }
            }
        })
    }

    async getByUserId(userId: number) {
        return this.prisma.order.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: returnProductObject
                        }
                    }
                }
            }
        })
    }
}
