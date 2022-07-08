import { ChangeEvent } from "react";

type Props = {
    value: string;
    onValueChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const GenreDropdown = ({value, onValueChange} : Props) => {

    return (
        <label className="text-xl font-sans">
            <span className="font-merienda">
                Search By Genre:&nbsp;&nbsp;
            </span>
            <select name="genre" value={value} onChange={onValueChange} className="p-2 rounded">
                <option value="all">Show All</option>
                <optgroup label="Genres">
                    <option value="Absurdist">Absurdist</option>
                    <option value="African-American">African American</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Coming-Of-Age">Coming Of Age</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Great-American-Novel">Great American Novel</option>
                    <option value="Historical">Historical</option>
                    <option value="Modernist">Modernist</option>
                    <option value="Philosophical">Philosophical</option>
                    <option value="Realistic">Realistic</option>
                    <option value="Romance">Romance</option>
                    <option value="Satire">Satire</option>
                    <option value="Social-Commentary">Social Commentary</option>
                    <option value="Tragedy">Tragedy</option>
                    <option value="War">War</option>
                </optgroup>
            </select>
        </label>
    );
}

export default GenreDropdown;