import nodemailer from "nodemailer";

import { IMailAdapter, ISendMailData } from "../interfaces/IMailAdapter";

export const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 2525,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});
export class NodeMailerAdapter implements IMailAdapter {
    async sendMail({ subject, body }: ISendMailData) {
        await transport.sendMail({
            from: "Equipe SistemaLoja <oi@sistemaloja.com>",
            to: "Victor <victorhugoraj@gmail.com>",
            subject,
            html: body,
        });
    }
}
