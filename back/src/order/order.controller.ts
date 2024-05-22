import { Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { OrderDto } from './order.dto';

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) { }

	@Get()
	@Auth('admin')
	async getAll() {
		return this.orderService.getAll()
	}

	@Get('by-user')
	@Auth()
	async getByUserId(@CurrentUser('id') userId: number) {
		return this.orderService.getByUserId(+userId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	placeOrder(@CurrentUser('id') userId: number, @Body() dto: OrderDto) {
		return this.orderService.placeOrder(userId, dto);
	}
}
