import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma.service';
import * as argon2 from "argon2"
@Injectable()
export class AuthService {
  constructor(private readonly db:PrismaService){}
  async login(logindata: LoginDto) {
      const user=await this.db.user.findUniqueOrThrow({
        where:{email:logindata.email}
      })
    
      if(await argon2.verify(user.password,logindata.password)){
        return "sikeres";
      } else{
        throw new Error("hibás")
      }
        
  }


}
