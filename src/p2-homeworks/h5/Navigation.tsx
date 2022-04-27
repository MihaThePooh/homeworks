import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

function Navigation() {
    const activeStyle = {color: "#212529"}

    return (
        <>
            {/*navigationOnTop*/}
            {/*<div className={s.navigationOnTop}>*/}
            {/*    &equiv;*/}
            {/*    <ul>*/}
            {/*        <li><NavLink to="/pre-junior" activeStyle={activeStyle}>pre-junior</NavLink></li>*/}
            {/*        <li><NavLink to="/junior" activeStyle={activeStyle}>junior</NavLink></li>*/}
            {/*        <li><NavLink to="/junior-plus" activeStyle={activeStyle}>junior-plus</NavLink></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

            navigationOnLeft
            <div className={s.navigationOnLeft}>
                &equiv;
                <div className={s.links}>
                    <NavLink to="/pre-junior" activeStyle={activeStyle}>pre-junior</NavLink>
                    <NavLink to="/junior" activeStyle={activeStyle}>junior</NavLink>
                    <NavLink to="/junior-plus" activeStyle={activeStyle}>junior-plus</NavLink>
                </div>
            </div>
        </>
    );
}

export default Navigation;