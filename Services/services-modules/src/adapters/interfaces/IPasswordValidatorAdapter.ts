export interface IVerifyPassword {
  password: string;
}
export interface IPasswordValidatorAdapter {
  verifyStrongePassword: (data: IVerifyPassword) => any;
}
