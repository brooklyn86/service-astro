import PasswordValidator from "password-validator";

import {
  IPasswordValidatorAdapter,
  IVerifyPassword,
} from "../interfaces/IPasswordValidatorAdapter";

const schema = new PasswordValidator();

schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(2)
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123", "12345", "123456789"]);

export class PasswordAdapter implements IPasswordValidatorAdapter {
  verifyStrongePassword({ password }: IVerifyPassword) {
    return schema.validate(password, { details: true });
  }
}
