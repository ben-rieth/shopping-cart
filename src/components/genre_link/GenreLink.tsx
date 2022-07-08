import { Link } from "react-router-dom"

type Props = {
    genre: string;
}

const GenreLink = ({genre}: Props) => {
    return (
        <Link to={`/browse/g/${genre}`}>
            <p className="uppercase font-semibold text-base font-sans leading-tight text-cyan-700 hover:underline underline-offset-2">{genre}</p>
        </Link>
    )
}

export default GenreLink;