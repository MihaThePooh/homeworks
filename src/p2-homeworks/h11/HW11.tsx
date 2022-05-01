import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const rangeStyle = {
        width: "266px",
        display: "flex",
        padding: "10px",
        justifyContent: "space-between"
    };

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const setValue1Handler = (value: number) => {
        setValue1(value);
    };

    const setValue12Handler = (value1: number) => {
        setValue1(value1);
        setValue2(value2);
    };

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div style={rangeStyle}>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1Handler}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={setValue1Handler}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
                * двойной не сделал ='(
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
