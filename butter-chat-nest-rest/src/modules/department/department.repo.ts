import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Department } from "./entities/department.entity";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { ResponseInterface } from "../../common/interface/response-interface";

@Injectable()
export class DepartmentRepository {
  constructor(
    @Inject('DEPARTMENT_REPOSITORY')
    private readonly departmentRepository: Repository<Department>
  ) {}

  // Create a new department
  async createDepartment(createDepartmentDto: CreateDepartmentDto) {
    //   const department = this.departmentRepository.create({
    //     company_id: createDepartmentDto.companyId,
    //     departmentName: createDepartmentDto.departmentName,
    //     departmntBio: createDepartmentDto.departmntBio,
    //   });

    //   const res = await this.departmentRepository.save(department);
      return new ResponseInterface({ message: "Department created", data: {} });
  }


  // Fetch all departments for a company
  async getDepartmentsByCompanyId(companyId: string) {
    // const res = await this.departmentRepository.find({
    //   where: { companyId },
    //   order: { createdDate: 'ASC' }, // assuming MetaData has createdAt
    // });

    return new ResponseInterface({
      message: "Departments fetched successfully",
      data: {},
    });
  }
}
