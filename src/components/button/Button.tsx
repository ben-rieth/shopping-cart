type ButtonProps = {
    text: string;
    onClick?: () => void;
}

const Button = ({text, onClick = () => {return}}: ButtonProps) => {

    return (
        <button 
            onClick={onClick} 
            className="font-merienda rounded text-xl px-12 py-2 hover:scale-105 bg-gradient-to-tl from-[#F2BF5E] via-[#F28705] to-[#B91C1C]"
        >
            {text}
        </button>
    )
}

export default Button;