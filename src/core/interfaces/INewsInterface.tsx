interface Isource {
    id: string,
    name: string
}

export interface INewsInterface {
    id?: string;
    source?: Isouce;
    author?: string;
    content: string;
    description: string;
    source: string;
    title: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
}