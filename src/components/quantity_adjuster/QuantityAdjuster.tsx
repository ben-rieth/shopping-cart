import AddIcon from './../../assets/images/add.svg';
import RemoveIcon from './../../assets/images/remove.svg';

const QuantityAdjuster = () => {

    return (
        <div className="flex gap-2">
            <button>
                <img src={RemoveIcon} alt="remove" className="w-8" />
            </button>
            <input type="text" value="1" className="w-8 text-center text-lg border border-slate-900"/>
            <button>
                <img src={AddIcon} alt="remove" className="w-8"/>
            </button>
        </div>
    );
}

export default QuantityAdjuster;