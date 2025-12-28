import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateRoleDto {
    @ApiProperty({ format: 'uuid' })
    @IsUUID()
    company_id: string;

    @ApiProperty({ example: 'Admin' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @ApiPropertyOptional({ example: 'Administrator role' })
    @IsString()
    @IsOptional()
    description?: string;
}
