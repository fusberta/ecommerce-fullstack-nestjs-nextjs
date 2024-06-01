import { StatisticService } from "./statistic.service";
export declare class StatisticController {
    private readonly statisticService;
    constructor(statisticService: StatisticService);
    getMainStatistics(): Promise<{
        name: string;
        value: number;
    }[]>;
}
