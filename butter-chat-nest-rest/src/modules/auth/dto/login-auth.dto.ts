import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class LoginAuthDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6,{message:"password should atleast 6 characters"})
    password: string
}
