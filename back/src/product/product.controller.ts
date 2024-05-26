import { BadRequestException, Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { Auth } from 'src/auth/decorators/auth.decorator'
import {
  Body,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  Query,
  UseInterceptors,
  UploadedFiles
} from '@nestjs/common/decorators'
import { GetAllProductDto } from './dto/get-all-products.dto';
import { ProductDto } from './dto/product.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Product } from '@prisma/client';
import { UpdateProductWithFilesDto } from './dto/product-with-files.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @UsePipes(new ValidationPipe())
  @Get()
  async getAll(@Query() queryDto: GetAllProductDto) {
    return this.productService.getAll(queryDto)
  }

  @UsePipes(new ValidationPipe())
  @Auth('admin')
  @Put(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 4 }]))
  async update(
    @Param('id') id: string,
    @Body() productDto: UpdateProductWithFilesDto,
    @UploadedFiles() files: { images?: Express.Multer.File[] }
  ) {
    const images = files.images.map(file => `/uploads/${file.filename}`);
    const updatedProductData: ProductDto = {
      ...productDto,
      images,
      price: Number(productDto.price),
      categoryId: Number(productDto.categoryId),
    };

    return this.productService.update(+id, updatedProductData);
  }

  @Get('similar/:id')
  async getSimilar(@Param('id') id: string) {
    return this.productService.getSimilar(+id)
  }

  @Get(':id')
  @Auth('admin')
  async getById(@Param('id') id: string) {
    return this.productService.byId(+id)
  }

  @Get('by-slug/:slug')
  async getProductBySlug(@Param('slug') slug: string) {
    return this.productService.bySlug(slug)
  }

  @Get('by-category/:categorySlug')
  async getProductByCategory(@Param('categorySlug') categorySlug: string) {
    return this.productService.byCategory(categorySlug)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth('admin')
  @Post()
  async createProduct() {
    return this.productService.create()
  }

  @HttpCode(200)
  @Auth('admin')
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productService.delete(+id)
  }
}
