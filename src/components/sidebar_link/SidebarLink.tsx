import { Link } from "react-router-dom";

type Props = {
    linkTo: string;
    text: string
}

const SidebarLink = ({linkTo, text} : Props) => {

    return (
        <Link to={linkTo}>
            <p className="text-3xl">
                {text}
            </p>
        </Link>
    )
}

export default SidebarLink;