import {
	Body,
	Controller,
	Get,
	HttpCode,
	Patch,
	Put,
	Param,
	UsePipes,
	ValidationPipe,
	UseInterceptors,
	UploadedFile,
	Post,
	Req
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserDto } from './user.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { Request } from 'express'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) { }

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: number) {
		return this.userService.byId(id)
	}

	@Post('visit')
	async logVisit(@Req() request: Request) {
		const ip = this.getIpAddress(request);
		this.userService.logVisit(ip);
		return { message: 'Visit logged' };
	}
	private getIpAddress(request: Request): string {
		const xForwardedFor = request.headers['x-forwarded-for'];
		const ip = Array.isArray(xForwardedFor) ? xForwardedFor[0] : xForwardedFor || request.socket.remoteAddress;
		return ip as string;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put('profile')
	async updateProfile(@CurrentUser('id') id: number, @Body() dto: UserDto) {
		return this.userService.updateProfile(id, dto)
	}

	@Put('profile/avatar')
	@Auth()
	@UseInterceptors(FileInterceptor('avatar'))
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async updateAvatar(
		@CurrentUser('id') id: number,
		@UploadedFile() avatar: Express.Multer.File
	) {
		return this.userService.updateAvatar(id, avatar);
	}

	@HttpCode(200)
	@Auth()
	@Patch('profile/favorites/:productId')
	async toggleFavorite(
		@CurrentUser('id') id: number,
		@Param('productId') productId: string
	) {
		return this.userService.toggleFavorite(+productId, id)
	}
}
