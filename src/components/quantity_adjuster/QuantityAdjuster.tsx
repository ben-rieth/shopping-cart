import { ChangeEvent, KeyboardEvent, useState} from 'react';
import AddIcon from './../../assets/images/add.svg';
import RemoveIcon from './../../assets/images/remove.svg';
import DeleteIcon from './../../assets/images/delete.svg';

type Props = {
    initialQuantity: number;
    onAddPress: () => void;
    onRemovePress: () => void;
    onInputChange: (newQuantity: number) => void;
}

const QuantityAdjuster = ({initialQuantity, onAddPress, onRemovePress, onInputChange}: Props) => {

    const [value, setValue] = useState<number>(initialQuantity);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (/\D+/.test(event.target.value)) {
            event.preventDefault();
        } else {
            setValue(Number(event.target.value));
        }
    }

    const addOneToValue = () => {
        setValue(value + 1);
        onAddPress();
    }

    const removeOneFromValue = () => {
        setValue(value - 1);
        onRemovePress();
    }

    const blurIfEnterPress = (event: KeyboardEvent) => {
        if(event.key === "Enter") {
            const target = event.target as HTMLElement;
            target.blur();
        }
    }

    return (
        <div className="flex items-center gap-2">
            <button>
                <img src={value === 1 ? DeleteIcon : RemoveIcon} 
                    alt="remove" 
                    className="w-10 h-10" 
                    onClick={removeOneFromValue}/>
            </button>
            <input 
                type="text"
                value={value} 
                onChange={handleChange}
                onBlur={() => onInputChange(value)}
                onKeyDown={blurIfEnterPress}
                className="w-10 h-10 text-center text-xl border border-slate-900"/>
            <button>
                <img src={AddIcon} 
                    alt="add" 
                    className="w-10 h-10" 
                    onClick={addOneToValue}/>
            </button>
        </div>
    );
}

export default QuantityAdjuster;