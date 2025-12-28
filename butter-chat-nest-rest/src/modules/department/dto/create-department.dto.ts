import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsUUID} from "class-validator";

export class CreateDepartmentDto{

    @ApiProperty({example:"customer service"})
    @IsString()
    @IsNotEmpty()
    department_name: string;

    @ApiProperty({example:"talks to the customers"})
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({example:"https://image/abcd.jpg"})
    @IsString()
    @IsOptional()
    department_profile_uri?:string
}

