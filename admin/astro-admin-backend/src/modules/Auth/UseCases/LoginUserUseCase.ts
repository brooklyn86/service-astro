import { AppMessageError } from "./../../../errors/AppMessageError";
import { IUserRepository } from "../../../repositories/User/Interfaces/IUserRepository";
import { ICryptAdapter } from "../../../adapters/interfaces/ICryptAdapter";
import { IClassValidatorAdapter } from "../../../adapters/interfaces/IClassValidatorAdapter";
import * as jwt from "jsonwebtoken";
interface ILoginUserUseCaseRequest {
  username: string;
  password: string;
  remember?: boolean;
}

interface ILoginUserUseCaseResponse {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  accepted: boolean;
}

export class LoginUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private cryptAdapter: ICryptAdapter,
    private classValidatorAdapter: IClassValidatorAdapter
  ) {}
  async execute(request: ILoginUserUseCaseRequest) {
    const { username, password, remember } = request;
    const query = {};
    if (this.classValidatorAdapter.isValidEmail({ email: username })) {
      Object.assign(query, { email: username });
    } else {
      Object.assign(query, { username });
    }
    const user = await this.userRepository.findUser(query);
    if (user) {
      if (
        this.cryptAdapter.checkIfUnencryptedPasswordIsValid({
          unencryptedPassword: password,
          password: user.password,
        })
      ) {
        delete user.password;
        delete user.password_recovery;
        const token = jwt.sign(
          { userId: user.id, email: user.email },
          process.env.JWT_SECRET || '',
          { expiresIn: "36h" }
        );
        return { user, token };
      }
      throw new AppMessageError("Nome de usuario ou senha invalidos", 403);
    }
    throw new AppMessageError("Nome de usuario ou senha invalidos", 403);
  }
}
