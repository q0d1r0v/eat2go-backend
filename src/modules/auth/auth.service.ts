import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(body: Record<string, any>) {
    try {
      return { message: 'Foydalanuvchi muvaffaqiyatli ro‘yxatdan o‘tdi', body };
    } catch (error: unknown) {
      throw new BadRequestException(
        error instanceof Error
          ? error.message
          : 'Ro‘yxatdan o‘tishda xatolik yuz berdi',
      );
    }
  }

  telegramData(body: Record<string, any>) {
    try {
      console.log(body);
      return { message: 'Foydalanuvchi malumtoari ', body };
    } catch (error: unknown) {
      throw new BadRequestException(
        error instanceof Error
          ? error.message
          : 'Malumotlarn olishda xatolik yuz berdi',
      );
    }
  }
}
