import Book from './../../services/types/Book';
import AddToCartIcon from './../../assets/images/add_cart.svg';
import { Link } from 'react-router-dom';

type BookProps = {
    book: Book;
}

const BookDisplay = ({book}: BookProps) => {
    const bookPage = `/browse/${book.title}/${book.id}`;

    return (
        <article className="flex flex-col gap-1 items-center outline outline-1 p-4 outline-slate-300 relative z-10">
            <Link to={bookPage}>
                <img src={book.imageURL} alt="cover" className="w-24 h-36 lg:w-32 lg:h-52"/>
            </Link>
            <div className="h-[2px] w-full bg-gradient-to-tl from-[#F2BF5E] via-[#F28705] to-[#BF4904]" />
            <Link to={bookPage}>

                <p className="font-bold text-center cursor-pointer text-cyan-700 text-md leading-tight underline-offset-2
                                lg:text-lg hover:underline"
                >
                    {book.title}
                </p>

            </Link>  
            <p className="font-medium font-merienda lg:text-lg">${book.price}</p>
            <div className="absolute top-0 right-0 hidden">
                <img src={AddToCartIcon} alt="cart" className="w-8" />
            </div>
        </article>
    )
}

export default BookDisplay;