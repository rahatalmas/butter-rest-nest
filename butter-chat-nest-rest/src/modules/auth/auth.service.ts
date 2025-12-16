import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/registry-auth.dto';
import { AuthRepo } from './auth.repo';

@Injectable()
export class AuthService {

  constructor(private readonly authRepo: AuthRepo){}

  login(loginAuthDto: LoginAuthDto) {
    return this.authRepo.login(loginAuthDto);
  }

  register(registerAuthDto: RegisterAuthDto){
    return this.authRepo.storeNewUser(registerAuthDto);
  }
}
