import { isEmail, isUUID } from "class-validator";
import {
  IClassValidatorAdapter,
  IValidEmail,
  IValidUuid,
} from "../interfaces/IClassValidatorAdapter";

export class ClassValidatorAdapter implements IClassValidatorAdapter {
  isValidEmail({ email }: IValidEmail) {
    return isEmail(email);
  }

  isValidUuid({ id }: IValidUuid) {
    return isUUID(id);
  }
}
