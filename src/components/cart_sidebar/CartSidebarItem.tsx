import { Link } from "react-router-dom";
import Book from "../../services/types/Book";

type Props = {
    book: Book
}

const CartSidebarItem = ({book}: Props) => {
    return (
        <article className="relative">
            <Link to={`/browse/${book.title}/${book.id}`}>
                <img src={book.imageURL} alt="cover" className="w-24 cursor-pointer"/>
                {book.quantity! > 1 ? 
                    <p className="absolute bottom-0 right-0 w-6 h-6 bg-red-700 text-center font-merienda">{book.quantity}</p> : ""}
            </Link>
        </article>
    )
}

export default CartSidebarItem;