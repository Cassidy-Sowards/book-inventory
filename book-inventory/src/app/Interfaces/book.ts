import { Review } from "./review";

export interface Book {
    id: number;
    title: string;
    author: string;
    genre?: string;
    review?: Review;
}
