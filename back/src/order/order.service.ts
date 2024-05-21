import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnProductObject } from 'src/product/return-product.object';
import { OrderDto } from './order.dto';
import { PaymentStatusDto } from './payment-status.dto';

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

    async placeOrder(userId: number, dto: OrderDto) {
        const order = await this.prisma.order.create({
            data: {
                status: dto.status,
                items: {
                    create: dto.items
                },
                user: {
                    connect: {
                        id: userId
                    }
                },
                total: dto.items.length > 0 ? dto.items.reduce((total, item) => total + item.price, 0) : 0
            }
        })

        return order
    }
}
