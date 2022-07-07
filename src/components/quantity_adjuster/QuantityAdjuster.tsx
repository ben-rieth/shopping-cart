import { ChangeEvent, KeyboardEvent, useState} from 'react';
import AddIcon from './../../assets/images/add.svg';
import RemoveIcon from './../../assets/images/remove.svg';
import DeleteIcon from './../../assets/images/delete.svg';

type Props = {
    initialQuantity: number;
    showDeleteIcon?: boolean;
    onInputChange: (newQuantity: number) => void;
}

const QuantityAdjuster = ({initialQuantity, showDeleteIcon=true, onInputChange}: Props) => {

    const [value, setValue] = useState<number>(initialQuantity);
    const [shake, setShake] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (/\D+/.test(event.target.value)) {
            event.preventDefault();
        } else {
            setValue(Number(event.target.value));
        }
    }

    const addOneToValue = () => {
        setValue(value + 1);
        onInputChange(value + 1);
    }

    const removeOneFromValue = () => {
        if(showDeleteIcon || value > 1) {
            setValue(value - 1);
            onInputChange(value - 1);
        } else {
            setShake(true);
            setTimeout(() => setShake(false), 700);
        }
    }

    const blurIfEnterPress = (event: KeyboardEvent) => {
        if(event.key === "Enter") {
            const target = event.target as HTMLElement;
            target.blur();
        }
    }

    return (
        <div className="flex items-center gap-2">
            <button data-cy="remove-btn">
                <img src={value === 1 && showDeleteIcon ? DeleteIcon : RemoveIcon} 
                    alt="remove" 
                    className={`w-10 h-10 ${shake && 'animate-shake-no'}`}
                    onClick={removeOneFromValue}/>
            </button>
            <input 
                type="text"
                value={value} 
                onChange={handleChange}
                onBlur={() => onInputChange(value)}
                onKeyDown={blurIfEnterPress}
                data-cy="quantity-input"
                className="w-10 h-10 text-center text-xl border border-slate-900"/>
            <button data-cy="add-btn">
                <img src={AddIcon} 
                    alt="add" 
                    className="w-10 h-10" 
                    onClick={addOneToValue}/>
            </button>
        </div>
    );
}

export default QuantityAdjuster;