/// <reference types="multer" />
export declare class UpdateProductWithFilesDto {
    name: string;
    price: number;
    description?: string;
    categoryId: number;
    images: Express.Multer.File[];
}
