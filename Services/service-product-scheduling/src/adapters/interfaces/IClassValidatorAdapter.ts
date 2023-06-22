export interface IValidEmail {
  email: string;
}

export interface IValidUuid {
  id: string
}

export interface IClassValidatorAdapter {
  isValidEmail: (data: IValidEmail) => boolean;
  isValidUuid: (data: IValidUuid) => boolean;
}