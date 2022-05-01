import React, {Component} from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1';
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW5 from "../../../p2-homeworks/h5/HW5";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW7 from "../../../p2-homeworks/h7/HW7";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW8 from "../../../p2-homeworks/h8/HW8";

class App extends Component {
    render() {
        return (
            <div className={s.App}>
                <div>react homeworks:</div>
                <HW5/>
            </div>
        )
    }
}

export default App
