import { IsString, IsNumber, IsOptional } from "class-validator";
import { MetaData } from "../../common/meta-data/meta-data";

export class CreateDepartmentDto{

    @IsString()
    companyId: string;

    @IsString()
    departmentName: string;

    @IsString()
    departmntBio: string;
}

