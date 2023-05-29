export interface IGenerateImageData {
    prompt: string;
    n: number;
    size: string;
}
export interface IGenerateCriativeData {
    prompt: string;
}
export interface IOpenIaAdapter {
    generateImage: (data: IGenerateImageData) => Promise<any>;
    generateCriative: (data: IGenerateCriativeData) => Promise<any>;
}
