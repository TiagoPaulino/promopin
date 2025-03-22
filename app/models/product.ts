export interface Product {
    id?: string;
    title: string;
    description: string;
    url: string;
    afiliate?: string | null;
    afiliateLink?: string|null;
    price?: number | null;
    images: string[];
    reviewVideos: string[];
    video?: string | null;
    clicks: number;
    createdAt?: Date;
    updatedAt?: Date;
}
