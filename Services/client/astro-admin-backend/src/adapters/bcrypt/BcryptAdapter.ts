import bcrypt from "bcrypt";

import {
    ICryptAdapter,
    ICryptPassword,
    IUnencryptedPassword,
} from "../interfaces/ICryptAdapter";

export class BcryptAdapter implements ICryptAdapter {
    hashPassword({ password }: ICryptPassword) {
        return bcrypt.hashSync(password, 8);
    }
    checkIfUnencryptedPasswordIsValid({
        password,
        unencryptedPassword,
    }: IUnencryptedPassword) {
        return bcrypt.compareSync(unencryptedPassword, password);
    }
}
