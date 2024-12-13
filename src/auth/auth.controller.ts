import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() logindata:LoginDto){
    try{
      return await this.authService.login(logindata)
    }
    catch{
      throw new UnauthorizedException("Hibás email vagy jelszó")
    }
    
    
  }
}
