import { Controller, ValidationPipe } from '@nestjs/common'
import { CategoryService } from './category.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import {
	Body,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes
} from '@nestjs/common/decorators'
import { CategoryDto } from './category.dto'

@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get()
	async getAll() {
		return this.categoryService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.categoryService.bySlug(slug)
	}

	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.categoryService.byId(+id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth('admin')
	@Put(':id')
	async update(
		@Param('id') id: string,
		@Body() dto: CategoryDto
	) {
		return this.categoryService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth('admin')
	@Post()
	async create() {
		return this.categoryService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth('admin')
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.categoryService.delete(+id)
	}
}
