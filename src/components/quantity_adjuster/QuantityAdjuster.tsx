import AddIcon from './../../assets/images/add.svg';
import RemoveIcon from './../../assets/images/remove.svg';

type Props = {
    initialQuantity: number;
    onAddPress: () => void;
    onRemovePress: () => void;
}

const QuantityAdjuster = ({initialQuantity, onAddPress, onRemovePress}: Props) => {

    return (
        <div className="flex gap-2">
            <button>
                <img src={RemoveIcon} alt="remove" className="w-8" onClick={onRemovePress}/>
            </button>
            <input type="text" value={initialQuantity} className="w-8 text-center text-lg border border-slate-900"/>
            <button>
                <img src={AddIcon} alt="remove" className="w-8" onClick={onAddPress}/>
            </button>
        </div>
    );
}

export default QuantityAdjuster;