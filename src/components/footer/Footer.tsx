import SocialMediaLink from "../social_media_link/SocialMediaLink";
import GithubIcon from './../../assets/images/github.svg';

const Footer = () => {

    return (
        <div className="bg-slate-300 h-10 w-full shrink-0 flex justify-center items-center gap-3">
            <p className="text-center font-merienda whitespace-pre-line">Cretaed by: Benji</p>
            <SocialMediaLink linkTo="https://github.com/ben-rieth" imgUrl={GithubIcon} imgSize='sm'/>
        </div>
    )
};

export default Footer;