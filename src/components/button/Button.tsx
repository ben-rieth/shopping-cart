type ButtonProps = {
    text: string;
}

const Button = ({text}: ButtonProps) => {

    return (
        <button className="border-2 border-black rounded text-xl px-6 hover:scale-105">{text}</button>
    )
}

export default Button;