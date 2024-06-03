"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const decorators_1 = require("@nestjs/common/decorators");
const get_all_products_dto_1 = require("./dto/get-all-products.dto");
const platform_express_1 = require("@nestjs/platform-express");
const product_with_files_dto_1 = require("./dto/product-with-files.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getAll(queryDto) {
        return this.productService.getAll(queryDto);
    }
    async update(id, productDto, files) {
        const images = files?.images?.map(file => `/uploads/${file.filename}`);
        const updatedProductData = {
            ...productDto,
            price: Number(productDto.price),
            categoryId: Number(productDto.categoryId),
            ...(images && { images }),
        };
        console.log(updatedProductData);
        return this.productService.update(+id, updatedProductData);
    }
    async getSimilar(id) {
        return this.productService.getSimilar(+id);
    }
    async getById(id) {
        return this.productService.byId(+id);
    }
    async getProductBySlug(slug) {
        return this.productService.bySlug(slug);
    }
    async getProductByCategory(categorySlug) {
        return this.productService.byCategory(categorySlug);
    }
    async createProduct() {
        return this.productService.create();
    }
    async deleteProduct(id) {
        return this.productService.delete(+id);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, decorators_1.UsePipes)(new common_1.ValidationPipe()),
    (0, decorators_1.Get)(),
    __param(0, (0, decorators_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_all_products_dto_1.GetAllProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAll", null);
__decorate([
    (0, decorators_1.UsePipes)(new common_1.ValidationPipe()),
    (0, auth_decorator_1.Auth)('admin'),
    (0, decorators_1.Put)(':id'),
    (0, decorators_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'images', maxCount: 4 }])),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Body)()),
    __param(2, (0, decorators_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_with_files_dto_1.UpdateProductWithFilesDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, decorators_1.Get)('similar/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getSimilar", null);
__decorate([
    (0, decorators_1.Get)(':id'),
    (0, auth_decorator_1.Auth)('admin'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getById", null);
__decorate([
    (0, decorators_1.Get)('by-slug/:slug'),
    __param(0, (0, decorators_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductBySlug", null);
__decorate([
    (0, decorators_1.Get)('by-category/:categorySlug'),
    __param(0, (0, decorators_1.Param)('categorySlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductByCategory", null);
__decorate([
    (0, decorators_1.UsePipes)(new common_1.ValidationPipe()),
    (0, decorators_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)('admin'),
    (0, decorators_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, decorators_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)('admin'),
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map