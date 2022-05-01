import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import s from "./SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, onChangeOption,
        ...restProps
    }
) => {
    // map options with key
    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key !!!!!!GH-Pages BUG HER!!!!!!!
        <option key={i} value={o}>{o}</option>
    )) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps} className={s.superSelect}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
