import Book from "../../services/types/Book";
import Button from "./../button/Button";

type Props = {
    selectedBook: Book;
}

const SelectedBookDisplay = ({selectedBook} : Props) => {

    const displayRow = Math.floor(selectedBook.gridIndex! / 2) + 2;
    const rowProperty = `row-start-${displayRow}`;

    return (
        <div className={`px-4 py-2 col-span-full row-span-1 outline outline-1 outline-slate-300 ${rowProperty}`}>
            <p className="font-bold">{selectedBook.title}</p>
            <div className="flex justify-around items-center">
                <img src={selectedBook.imageURL} alt="cover" className="w-24"/>
                <div className="flex flex-col">
                    <p>{selectedBook.price}</p>
                    <Button text="Add to Cart" />
                </div>
            </div>
        </div>
    );
}

export default SelectedBookDisplay;