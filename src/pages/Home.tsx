import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import Header from "../components/header/Header";

import ImageLoader from '../components/image_loader/ImageLoader';
import AddIcon from './../assets/images/add.svg';
import RemoveIcon from './../assets/images/remove.svg';
import DeleteIcon from './../assets/images/delete.svg';
import BookIcon from './../assets/images/book.svg';

function Home() {

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-[30vh]">
        <h2 className="text-center text-2xl">Ready to find a new favorite?</h2>
        <Link to="/browse">
          <Button text="Browse"/>
        </Link>
      </div>
      <ImageLoader urls={[AddIcon, RemoveIcon, DeleteIcon, BookIcon]} />
    </div>
  );
}

export default Home;
