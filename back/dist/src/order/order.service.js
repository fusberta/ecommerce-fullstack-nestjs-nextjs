"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_product_object_1 = require("../product/return-product.object");
const client_1 = require("@prisma/client");
let OrderService = class OrderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.order.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: return_product_object_1.returnProductObject
                        }
                    }
                }
            }
        });
    }
    async getByUserId(userId) {
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
                            select: return_product_object_1.returnProductObject
                        }
                    }
                }
            }
        });
    }
    async byId(id) {
        return this.findOrder({ id }, 'Order not found');
    }
    async findOrder(filter, errorMessage) {
        const order = await this.prisma.order.findUnique({
            where: filter
        });
        if (!order) {
            throw new common_1.NotFoundException(errorMessage);
        }
        return order;
    }
    async placeOrder(userId, dto) {
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
        });
        return order;
    }
    async updateOrderStatus(id, data) {
        const order = await this.findOrder({ id }, 'Order not found');
        if (order.status !== client_1.EnumOrderItemStatus.NEW) {
            throw new common_1.BadRequestException('Only orders with status NEW can be updated');
        }
        return this.prisma.order.update({
            where: { id },
            data
        });
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map