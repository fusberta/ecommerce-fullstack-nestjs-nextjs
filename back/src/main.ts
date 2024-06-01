import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const prismaService = app.get(PrismaService);
  // await prismaService.enableShutdownHooks(app)

  app.useStaticAssets(join(__dirname, '..', 'src', 'uploads'), {
    prefix: '/uploads/',
  });

  app.setGlobalPrefix('api')
  app.enableCors()
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
