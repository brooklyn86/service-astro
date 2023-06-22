import { AppMessageError } from "./../../../errors/AppMessageError";
import { PrismaUserRepository } from "./../../../repositories/PrismaUserRepository";
import {
  IAuthController,
  ILogin,
  IRegister,
} from "../Interfaces/IAuthController";
import { RegisterUserUseCase } from "../UseCases/RegisterUserUseCase";
import { PasswordAdapter } from "../../../adapters/password-validator/PasswordAdapter";
import { BcryptAdapter } from "../../../adapters/bcrypt/BcryptAdapter";
import { LoginUserUseCase } from "../UseCases/LoginUserUseCase";
import { ClassValidatorAdapter } from "../../../adapters/class-validator/ClassValidatorAdapter";

export class AuthController implements IAuthController {
  async register({
    firstName,
    lastName,
    email,
    username,
    password,
    c_password,
    accepted,
  }: IRegister) {
    const prismaUserRepository = new PrismaUserRepository();
    const passwordAdapter = new PasswordAdapter();
    const crypyoAdapter = new BcryptAdapter();
    const registerUserUseCase = new RegisterUserUseCase(
      prismaUserRepository,
      passwordAdapter,
      crypyoAdapter
    );
    try {
      return await registerUserUseCase.execute({
        firstName,
        lastName,
        email,
        username,
        password,
        c_password,
        accepted,
      });
    } catch (error) {
      throw new AppMessageError(error.message);
    }
  }
  async login({ username, password, remember }: ILogin) {
    const prismaUserRepository = new PrismaUserRepository();
    const crypyoAdapter = new BcryptAdapter();
    const classValidatorAdapter = new ClassValidatorAdapter();
    const loginUserUseCase = new LoginUserUseCase(
      prismaUserRepository,
      crypyoAdapter,
      classValidatorAdapter
    );
    try {
      return await loginUserUseCase.execute({
        username,
        password,
        remember,
      });
    } catch (error) {
      throw new AppMessageError(error.message);
    }
  }
}
