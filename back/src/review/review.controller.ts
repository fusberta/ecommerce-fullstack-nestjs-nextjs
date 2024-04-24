import { Controller, ValidationPipe } from '@nestjs/common'
import { ReviewService } from './review.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import {
	Body,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	UsePipes
} from '@nestjs/common/decorators'
import { ReviewDto } from './review.dto'
import { CurrentUser } from 'src/auth/decorators/user.decorator'

@Controller('reviews')
export class ReviewController {
	constructor(private reviewService: ReviewService) {}

	@Get()
	@Auth('admin')
	async getAll() {
		return this.reviewService.getAll()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post('leave/:productId')
	async leaveReview(
		@CurrentUser('id') id: number,
		@Body() dto: ReviewDto,
		@Param('productId') productId: string
	) {
		return this.reviewService.create(id, dto, +productId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.reviewService.delete(+id)
	}

	@Get('average-by-product/:productId')
	async getAverageByProduct(@Param('productId') productId: string) {
		return this.reviewService.getAverageValueByProductId(+productId)
	}
}
