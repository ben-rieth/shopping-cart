type Book = {
    id: string;
    title: string;
    author: string;
    price: number;
    imageURL: string;
    quantity?: number;
    gridIndex?: number;
}

export default Book;