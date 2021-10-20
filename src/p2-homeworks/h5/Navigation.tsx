import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

function Navigation() {
    const activeStyle = {color: "#212529"}

    return (
        <div className={s.navigation}>
            &equiv;
            <ul>
                <li><NavLink to="/pre-junior" activeStyle={activeStyle}>pre-junior</NavLink></li>
                <li><NavLink to="/junior-plus" activeStyle={activeStyle}>junior-plus</NavLink></li>
                <li><NavLink to="/junior" activeStyle={activeStyle}>junior</NavLink></li>
            </ul>
        </div>
    );
}

export default Navigation;