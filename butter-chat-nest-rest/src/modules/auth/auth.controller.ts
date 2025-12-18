import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/registry-auth.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('auth management')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({summary:'company login'})
  @Post('login')
  create(@Body()loginAuthDto:LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
  
  @ApiOperation({summary:'company registration'})
  @Post('register')
  register(@Body()registerAuthDto:RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }
}
