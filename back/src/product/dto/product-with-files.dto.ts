import { IsOptional, IsString } from "class-validator";

export class UpdateProductWithFilesDto {
    @IsString()
    name: string;
  
    price: number;
  
    @IsOptional()
    @IsString()
    description?: string;
  
    @IsOptional()
    categoryId: number;
  
    images: Express.Multer.File[];
  }