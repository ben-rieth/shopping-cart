import Genre from "./Genre";

type Book = {
    id: string;
    title: string;
    author: string;
    price: number;
    imageURL: string;
    quantity?: number;
    gridIndex? : number;
    genre: Genre[];
}

export default Book;