import Twilio from "twilio";

import { IWhatsappAdapter, IWhatsappData } from "../interfaces/IWhatsappAdapter";

const client = Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_ACCOUNT_AUTH_TOKEN
);

export class TwilioWhatsappAdapter implements IWhatsappAdapter {
  async sendWhatsappMessage({ to, body }: IWhatsappData) {
    await client.messages.create({
      body,
      to,
      from: process.env.TWILIO_ACCOUNT_NUMBER_WHATSAPP,
    });
  }
}
