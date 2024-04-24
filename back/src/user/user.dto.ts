import { IsEmail, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class UserDto {
    @IsEmail()
    email:string

    @IsOptional()
    @IsString()
    name:string

    @IsOptional()
    @IsString()
    @MinLength(6, {
        message: 'Password must be at least 6 characters long'
    })
    password?:string

    @IsOptional()
    @IsString()
    avatarPath:string

    @IsOptional()
    @IsPhoneNumber('RU')
    @IsString()
    phone?:string

    @IsOptional()
    @IsString()
    address?:string
}