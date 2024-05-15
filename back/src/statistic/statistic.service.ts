import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class StatisticService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async getMain() {
        const ordersCount = await this.prisma.order.count();
        const reviewsCount = await this.prisma.review.count();
        const usersCount = await this.prisma.user.count();

        const totalAmount = await this.prisma.order.aggregate({
            _sum: {
                total: true
            }
        });

        return [
            {
                name: 'Orders',
                value: ordersCount
            },
            {
                name: 'Reviews',
                value: reviewsCount
            },
            {
                name: 'Users',
                value: usersCount
            },
            {
                name: 'Total amount',
                value: totalAmount._sum.total
            }
        ]
    }
}