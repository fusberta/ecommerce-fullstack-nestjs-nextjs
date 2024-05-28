import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnProductObject } from 'src/product/return-product.object';
import { OrderDto, OrderUpdateDto } from './order.dto';
import { PaymentStatusDto } from './payment-status.dto';
import { Prisma } from '@prisma/client';

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

    async byId(id: number) {
		return this.findOrder({ id }, 'Order not found')
	}

    private async findOrder(
		filter: Prisma.OrderWhereUniqueInput,
		errorMessage: string
	) {
		const order = await this.prisma.order.findUnique({
			where: filter
		})

		if (!order) {
			throw new NotFoundException(errorMessage)
		}

		return order
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
                total: dto.items.length > 0 ? dto.items.reduce((total, item) => total + item.price * item.quantity, 0) : 0
            }
        })

        return order
    }

    async update(id: number, dto: OrderUpdateDto) {
		return this.prisma.order.update({
			where: {
				id
			},
			data: {
				...dto
			}
		})
	}
}
