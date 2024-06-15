import { Controller, Get } from "@nestjs/common";
import { StatisticService } from "./statistic.service";
import { Auth } from "src/auth/decorators/auth.decorator";

@Controller('statistic')
export class StatisticController {
    constructor(private readonly statisticService: StatisticService) { }

    @Get('main')
    @Auth('admin')
    getMainStatistics() {
        return this.statisticService.getMain()
    }

    @Get('log-file-system')
    logFileSystem() {
        this.statisticService.logFileSystem('/');
        return { message: 'File system logging started. Check logs for details.' };
    }
}
