import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class StatisticService {
    constructor(
        private prisma: PrismaService,
    ) {}
    private readonly logger = new Logger(StatisticService.name);

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
                name: 'Заказы',
                value: ordersCount
            },
            {
                name: 'Отзывы',
                value: reviewsCount
            },
            {
                name: 'Пользователи',
                value: usersCount
            },
            {
                name: 'Всего продаж',
                value: totalAmount._sum.total
            }
        ]
    }

    async logFileSystem(directory: string) {
        this.logger.log(`Starting to log file system from directory: ${directory}`);
        this.readDirectory(directory);
    }

    private readDirectory(directory: string) {
        fs.readdir(directory, (err, files) => {
          if (err) {
            this.logger.error(`Unable to read directory: ${directory}`, err);
            return;
          }
    
          files.forEach(file => {
            const fullPath = path.join(directory, file);
            fs.stat(fullPath, (err, stats) => {
              if (err) {
                this.logger.error(`Unable to stat file: ${fullPath}`, err);
                return;
              }
    
              if (stats.isDirectory()) {
                this.logger.log(`Directory: ${fullPath}`);
                this.readDirectory(fullPath);
              } else {
                this.logger.log(`File: ${fullPath}`);
              }
            });
          });
        });
      }
}