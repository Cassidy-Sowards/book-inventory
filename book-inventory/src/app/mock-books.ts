import { Book } from "./interfaces/book";
import { Review } from "./interfaces/review";

export const BOOKS: Book[] = [
    {   id: 1, 
        title: "Maximum Ride: The Angel Experiment", 
        author: "James Paterson", 
        genre: "Sci-Fi", 
        review: {
            rating: "4/5",
            comment: "Action packed, great escpae read"
        }
    },
    {
        id: 2, 
        title: "Maximum Ride: School's Out - Forever", 
        author: "James Paterson", 
        genre: "Sci-Fi"
    },
    {
        id: 3, 
        title: "Maximum Ride: Saving the World and Other Extreme Sports", 
        author: "James Paterson", 
        genre: "Sci-Fi"
    },
    {
        id: 4, 
        title: "All My Rage", 
        author: "Saba Tahir", 
        genre: "Contemporary",
        review: {
            rating: "5/5",
            comment: "Beautifully written, great themes"
        }
    },
    {
        id: 5, 
        title: "One Last Stop", 
        author: "Casey McQuinston", 
        genre: "Romance"
    }
]