import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() body) {
    return this.authService.register(body);
  }

  @Post('/telegram/data')
  telegram(@Body() body) {
    return this.authService.telegramData(body);
  }
}
