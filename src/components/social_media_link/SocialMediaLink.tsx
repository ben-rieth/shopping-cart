import { Link } from "react-router-dom";

type Props = {
    imgUrl: string;
    linkTo: string;
    imgSize?: "sm" | "lg";
}

const SocialMediaLink = ({imgUrl, linkTo, imgSize="lg"} : Props) => {

    return (
        <a href={linkTo}>
            <img src={imgUrl} alt="" className={`${imgSize === 'lg' ? 'w-20 h-20' : 'w-5 h-5'} cursor-pointer hover:scale-110`}/>
        </a>
    )
}

export default SocialMediaLink;