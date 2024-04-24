import { IsEmail, IsString, MinLength, IsOptional, IsPhoneNumber } from "class-validator";

export class AuthDto {
    @IsEmail()
    email:string

    @IsOptional()
    @IsString()
    name:string

    @IsString()
    @MinLength(6, {
        message: 'Password must be at least 6 characters long'
    })
    password:string

    @IsOptional()
    @IsString()
    avatarPath:string

    @IsOptional()
    @IsPhoneNumber('RU')
    phone:string
}