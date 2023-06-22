export interface ILogin {
  username: string;
  password: string;
  remember?: boolean;
}

export interface IRegister {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  c_password: string;
  accepted: boolean;
}

export interface IAuthController {
  register: (data: IRegister) => void;
  login: (data: ILogin) => void;
}
