import { Controller, Get, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @Auth('admin')
	async getAll() {
		return this.orderService.getAll()
	}

  @Get('by-user')
  @Auth()
	async getByUserId(@CurrentUser('id') userId: string) {
		return this.orderService.getByUserId(+userId)
	}
}
