export interface ITiktokScraperAdapter {
    id: string;
}

export interface ITiktokAdapter {
    login: (data: ITiktokScraperAdapter) => Promise<any>;
}
