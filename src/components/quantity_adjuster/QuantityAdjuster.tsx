import { ChangeEvent} from 'react';
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (/\D+/.test(event.target.value)) {
            event.preventDefault();
        } else {
            onInputChange(Number(event.target.value));
        }
    }

    return (
        <div className="flex gap-2">
            <button>
                <img src={initialQuantity === 1 ? DeleteIcon : RemoveIcon} 
                    alt="remove" 
                    className="w-10" 
                    onClick={onRemovePress}/>
            </button>
            <input 
                type="text"
                value={initialQuantity} 
                onChange={handleChange}
                className="w-10 text-center text-xl border border-slate-900"/>
            <button>
                <img src={AddIcon} 
                    alt="remove" 
                    className="w-10" 
                    onClick={onAddPress}/>
            </button>
        </div>
    );
}

export default QuantityAdjuster;