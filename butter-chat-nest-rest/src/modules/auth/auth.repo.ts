import * as bcrypt from 'bcrypt';
import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { company_status, Registry } from './entities/registry.entity';
import { RegisterAuthDto } from './dto/registry-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthRepo {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Registry, 'MASTER_DB')
    private readonly authRepository: Repository<Registry>,
  ) {}

  //company registration request ...
  async storeNewUser(registerAuthDto: RegisterAuthDto) {
    const hashedPassword = await bcrypt.hash(registerAuthDto.password, 10);

    const sanitizedName = registerAuthDto.company_name
      .toLowerCase()
      .replace(/\s+/g, '_') // replace spaces with _
      .replace(/[^a-z0-9_]/g, ''); // remove special chars

    const my_db_name = `butter_chat_${sanitizedName}_${uuidv4()}`;
    console.log('Generated DB name:', my_db_name);
    console.log("generated db name: ",my_db_name)
    const user = this.authRepository.create({
      company_name: registerAuthDto.company_name,
      sub_domain: registerAuthDto.sub_domain,
      email: registerAuthDto.email,
      password: hashedPassword,
      db_name:my_db_name
    });

    try{
      const savedUser = await this.authRepository.save(user);
      return {
        status:'success',
        companyName: savedUser.company_name,
        message:"wait for admin approval",
      };
    }catch(err){
      console.log(err)
      throw new BadRequestException("invalid request")
    }

  }


  //company login system...
  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.authRepository.findOne({
      where: { email: loginAuthDto.email },
    });

    if (!user) {
      return { 
        status: 'fail',
        message: 'Invalid email' 
      };
    }

    const isPasswordValid = await bcrypt.compare(
      loginAuthDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      return {
         status: 'fail',
         message: 'Invalid password'
      };
    }

    if (user.status === company_status.PENDING) {
      return {
        status:'pending',
        companyName: user.company_name,
        message:"wait for admin approval",
      };
    }

    const payload = { sub: user.id, businessName: user.company_name };

    try{
      const accessToken = await this.jwtService.signAsync(payload, {
        expiresIn: '1d',
      });

      const refreshToken = await this.jwtService.signAsync(payload, {
        expiresIn: '30d',
      });

      await this.authRepository.save(user);

      return {
        status:'success',
        userId: user.id,
        accessToken,
        refreshToken,
      };
    }catch(err){
      throw new BadRequestException("invalid request")
    }

  }
}
