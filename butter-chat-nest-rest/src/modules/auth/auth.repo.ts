import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { Registry } from './entities/registry.entity';
import { RegisterAuthDto } from './dto/registry-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ResponseInterface } from '../../common/interface/response-interface';

@Injectable()
export class AuthRepo {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('AUTH_REPOSITORY')
    private readonly authRepository: Repository<Registry>,
  ) {}

  /**
   * Register a new user
  */
  async storeNewUser(registerAuthDto: RegisterAuthDto) {
    const existingUser = await this.authRepository.findOne({
      where: { email: registerAuthDto.email },
    });

    if (existingUser) {
      return new ResponseInterface({
        message: 'Email already registered',
        status: 'error',
      });
    }

    const hashedPassword = await bcrypt.hash(registerAuthDto.password, 10);

    const user = this.authRepository.create({
      business_name: registerAuthDto.business_name,
      email: registerAuthDto.email,
      password: hashedPassword,
    });

    const savedUser = await this.authRepository.save(user);

    const payload = { sub: savedUser.id, businessName: savedUser.business_name };
    const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '10m' });
    const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '30d' });

    return new ResponseInterface({
      message: 'Registration successful',
      status: 'success',
      data: {
        userId: savedUser.id,
        accessToken,
        refreshToken,
      },
    });
  }

  /**
   * Login an existing user
   */
  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.authRepository.findOne({
      where: { email: loginAuthDto.email },
    });

    if (!user) {
      return new ResponseInterface({
        message: 'Invalid email or password',
        status: 'error',
      });
    }

    const isPasswordValid = await bcrypt.compare(loginAuthDto.password, user.password);
    if (!isPasswordValid) {
      return new ResponseInterface({
        message: 'Invalid email or password',
        status: 'error',
      });
    }

    const payload = { sub: user.id, businessName: user.business_name };
    const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '10m' });
    const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '30d' });
    console.log('login successful')
    return new ResponseInterface({
      message: 'Login Successful',
      status: 'success',
      data: {
        userId: user.id,
        accessToken,
        refreshToken,
      },
    });
  }
}
