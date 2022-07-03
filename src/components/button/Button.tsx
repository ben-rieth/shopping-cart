type ButtonProps = {
    text: string;
    onClick?: () => void;
}

const Button = ({text, onClick = () => {return}}: ButtonProps) => {

    return (
        <button onClick={onClick} className="border-2 border-white font-merienda text-white rounded text-xl px-6 hover:scale-105">{text}</button>
    )
}

export default Button;