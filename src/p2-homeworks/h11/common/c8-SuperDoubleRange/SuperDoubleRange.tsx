import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value1: number) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        onChange,
        ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const input2 = { transform: "rotate(180deg)" };
    const input1 = { width: "200px" };

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value);
    };

    return (
        <>
            <input style={input1}
                   onChange={onChangeCallback}
                   type={"range"}
                   value={value}
                   {...restProps}
            />
            <input style={input2}
                type={"range"}
                {...restProps}
            />
        </>
    );
}

export default SuperDoubleRange;
