import { Link } from "react-router-dom";

type Props = {
    linkTo: string;
    text: string;
    icon: string;
}

const SidebarLink = ({linkTo, text, icon} : Props) => {

    return (
        <Link to={linkTo}>
            <div className="flex items-center gap-3">
                <img src={icon} alt="" className="w-10 h-10"/>
                <p className="text-3xl font-merienda text-transparent bg-clip-text bg-gradient-to-tl from-[#F28705] to-[#B91C1C]">
                    {text}
                </p>
            </div>
        </Link>
    )
}

export default SidebarLink;