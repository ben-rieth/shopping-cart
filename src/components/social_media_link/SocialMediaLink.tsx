import { Link } from "react-router-dom";

type Props = {
    imgUrl: string;
    linkTo: string;
}

const SocialMediaLink = ({imgUrl, linkTo} : Props) => {
    return (
        <a href={linkTo}>
            <img src={imgUrl} alt="" className="w-20 h-20 cursor-pointer hover:scale-110"/>
        </a>
    )
}

export default SocialMediaLink;