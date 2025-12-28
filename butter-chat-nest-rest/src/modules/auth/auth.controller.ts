import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/registry-auth.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SkipTenant } from '../../common/decorators/skip-tenant.decorator';

@ApiTags('auth management')
@Controller('auth')
export class AuthController { 
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'company login' })
  @Post('login')
  // @SkipTenant()
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginAuthDto: LoginAuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.login(loginAuthDto);

    if (result?.refreshToken) {
      res.cookie('refresh_token', result.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
    }

    return {
      status: result.status,
      message: result.message,
      data: {
        userId: result.userId,
        accessToken: result.accessToken,
      },
    };
  }

  @ApiOperation({ summary: 'company registration' })
  @Post('register')
  // @SkipTenant()
  async register(
    @Body() registerAuthDto: RegisterAuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.register(registerAuthDto);
    return {
      status: result.status,
      message: result.message,
      data: {
        companyName:result.companyName
      },
    };
  }
}

