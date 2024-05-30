import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from 'src/prisma.service';
import { EnumOrderItemStatus } from '@prisma/client';

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService, { provide: 'EnumOrderItemStatus', useValue: EnumOrderItemStatus }],
  exports: [OrderService, 'EnumOrderItemStatus']
})
export class OrderModule {}
