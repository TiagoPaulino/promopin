export interface Product {
    id?: string;
    title: string;
    description: string;
    url: string;
    afiliate?: string;
    afiliateLink?: string;
    price?: number;
    images: string[];
    reviewVideos: string[];
    video?: string;
    clicks: number;
    createdAt?: Date;
    updatedAt?: Date;
}
