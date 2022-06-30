import Button from "../components/button/Button.tsx";
import Header from "../components/header/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-[30vh]">
        <h2 className="text-center text-2xl">Ready to find a new favorite?</h2>
        <Button text="Browse"/>
      </div>
    </div>
  );
}

export default Home;
