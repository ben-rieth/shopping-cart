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
    <div className="w-screen h-screen bg-home bg-cover bg-[center_top] md:bg-contain">
      <Header />
      <div className="flex flex-col items-center gap-3 mt-48 py-5 bg-black/30 relative">
        <h2 className="text-center text-3xl text-white font-merienda">Ready to discover a new favorite?</h2>
        <Link to="/browse">
          <Button text="Browse"/>
        </Link>
      </div>
      <ImageLoader urls={[AddIcon, RemoveIcon, DeleteIcon, BookIcon]} />
    </div>
  );
}

export default Home;
