import { IUser } from "./user.interface";

export interface IReview {
    id: number
    rating: number
    user: IUser
    createdAt: string
    text: string
}

export interface IReviewCreate {
    rating: number;
    text: string;
}