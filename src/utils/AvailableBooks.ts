import Book from "../services/types/Book";
import Catch22Cover from "./../assets/images/covers/catch-22.webp";
import UlyssesCover from "./../assets/images/covers/ulysses.webp";
import DonQuixoteCover from "./../assets/images/covers/don-quixote.webp";
import GatsbyCover from "./../assets/images/covers/gatsby.webp";
import WarAndPeaceCover from "./../assets/images/covers/war-and-peace.webp";
import CatcherCover from "./../assets/images/covers/catcher-rye.webp";
import NineteenEightyFourCover from "./../assets/images/covers/1984.webp";
import EastOfEdenCover from "./../assets/images/covers/east-of-eden.webp";
import InvisibleManCover from "./../assets/images/covers/invisible-man.webp";
import PridePrejudiceCover from "./../assets/images/covers/pride-prejudice.webp";
import StrangerCover from './../assets/images/covers/stranger.webp';

const availableBooks: Book[] = [
    {
        id: "1",
        title: "Catch-22",
        author: "Joseph Heller",
        price: 8.99,
        imageURL: Catch22Cover
    },
    {
        id: "2",
        title: "Ulysses",
        author: "James Joyce",
        price: 9.99,
        imageURL: UlyssesCover
    },
    {
        id: "3",
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        price: 10.99,
        imageURL: DonQuixoteCover
    },
    {
        id: "4",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 6.99,
        imageURL: GatsbyCover
    },
    {
        id: "5",
        title: "War and Peace",
        author: "Leo Tolstoy",
        price: 10.99,
        imageURL: WarAndPeaceCover
    },
    {
        id: "6",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 7.99,
        imageURL: CatcherCover
    },
    {
        id: "7",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 8.99,
        imageURL: PridePrejudiceCover
    },
    {
        id: "8",
        title: "Nineteen Eighty Four",
        author: "George Orwell",
        price: 7.99,
        imageURL: NineteenEightyFourCover
    },
    {
        id: "9",
        title: "East of Eden",
        author: "John Steinbeck",
        price: 11.99,
        imageURL: EastOfEdenCover
    },
    {
        id: "10",
        title: "Invisible Man",
        author: "Ralph Ellison",
        price: 7.99,
        imageURL: InvisibleManCover
    },
    {
        id: "11",
        title: "The Stranger",
        author: "Albert Camus",
        price: 6.99,
        imageURL: StrangerCover
    }

];

export default availableBooks;