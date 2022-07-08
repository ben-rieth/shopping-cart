import { Link } from "react-router-dom";

type Props = {
    links: {
        to: string;
        title: string;
    }[];
    currentPage: string;
}

const LinkPath = ({ links, currentPage }: Props) => {

    return (
        <nav className="flex gap-2 mt-3 justify-center">
            {links.map((link, index) => {
                return (
                    <>
                        <Link to={link.to} key={link.title}>
                            <p className="hover:underline underline-offset-2 text-cyan-700 font-semibold">{link.title}</p>
                        </Link>
                        <p key={`arrow-${index}`}> &gt; </p>
                    </>
                );
            })}
            <p key={currentPage} className="font-semibold">{currentPage}</p>
        </nav>
    );
}

export default LinkPath;