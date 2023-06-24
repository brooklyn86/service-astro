import { Configuration, OpenAIApi } from "openai";
import { IGenerateImageData, IGenerateCriativeData, IOpenIaAdapter } from "../interfaces/IOpenIaAdapter";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

export class OpenAiAdapter implements IOpenIaAdapter {
    async generateImage({ prompt, n, size = '1024x1024' }: IGenerateImageData) {
        const openai = new OpenAIApi(configuration);
        const response = await openai.createImage(
            {
                prompt,
                n,
                size,
            },
        )
        return response.data
    }
    async generateCriative({ prompt }: IGenerateCriativeData) {
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion(
            {
                model: "text-davinci-003",
                prompt,
                temperature: 0.5,
                max_tokens: 200,
                top_p: 1,
                frequency_penalty: 0.0,
                presence_penalty: 0,
            },
        )
        return response.data
    }
}
