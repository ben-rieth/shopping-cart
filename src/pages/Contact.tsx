import Header from "../components/header/Header";
import LinkPath from "../components/link_path/LinkPath";

import FacebookLogo from './../assets/images/facebook.svg';
import TwitterLogo from './../assets/images/twitter.svg';
import InstagramLogo from './../assets/images/instagram.svg';
import GithubLogo from './../assets/images/github.svg';
import SocialMediaLink from "../components/social_media_link/SocialMediaLink";

const Contact = () => {

    return (
        <div>
            <Header />
            <div className="hidden md:block">
                <LinkPath links={[{to: '/', title: 'Home'}]} currentPage="Contact" />
            </div>
            <h2 className="text-center font-merienda text-3xl mt-2">Find Us on Social Media</h2>
            <div className="flex gap-10 justify-center mt-5">
                <SocialMediaLink imgUrl={GithubLogo} linkTo="https://github.com/ben-rieth" />
                <SocialMediaLink imgUrl={FacebookLogo} linkTo="/" />
                <SocialMediaLink imgUrl={InstagramLogo} linkTo="/" />
                <SocialMediaLink imgUrl={TwitterLogo} linkTo="/" />
            </div>
            <h2 className="text-center font-merienda text-3xl mt-12">Or Visit Us!</h2>
            <div className="flex flex-col items-center text-center text-xl mt-5">
                <p className="font-merienda font-light">New Leaf Books</p>
                <p>300 Real Address Street</p>
                <p>Tulsa, Oklahoma</p>
            </div>
        </div>
    )
}

export default Contact;