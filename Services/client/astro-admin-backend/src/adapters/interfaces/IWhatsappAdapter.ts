export interface IWhatsappData {
  to: string;
  body: string;
}

export interface IWhatsappAdapter {
  sendWhatsappMessage: (data: IWhatsappData) => Promise<void>;
}
