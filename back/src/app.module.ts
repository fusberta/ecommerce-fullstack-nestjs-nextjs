import { Logger, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma.service'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { ProductModule } from './product/product.module'
import { ReviewModule } from './review/review.module'
import { CategoryModule } from './category/category.module'
import { OrderModule } from './order/order.module'
import { PaginationModule } from './pagination/pagination.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'
import { StatisticModule } from './statistic/statistic.module'

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${path}/src/uploads`,
			serveRoot: '/uploads'
		}),
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		ProductModule,
		StatisticModule,
		ReviewModule,
		CategoryModule,
		OrderModule,
		PaginationModule
	],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
