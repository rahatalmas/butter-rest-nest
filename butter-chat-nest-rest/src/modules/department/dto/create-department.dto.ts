import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateDepartmentDto{
    @IsString()
    companyId: string;

    @IsString()
    departmentName: string;

    @IsString()
    departmntBio: string;
}

