import { PrismaService } from "src/prisma.service";
export declare class StatisticService {
    private prisma;
    constructor(prisma: PrismaService);
    getMain(): Promise<{
        name: string;
        value: number;
    }[]>;
}
