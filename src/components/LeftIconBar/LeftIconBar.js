import React from 'react';
import s from './LeftIconBar.module.scss';
import {ReactComponent as Icon1} from "../../Images/Svg/angle-double-down-solid.svg";
import {ReactComponent as Icon2} from "../../Images/Svg/car-alt-solid.svg";

function LeftIconBar()
{
    return (
        <div className={s.left_bar}>
            <div className={s.container}>
                <a className={s.center_btn} href="#">
                    <Icon1 className={s.svg_fill}/>
                </a>
            </div>
            <div className={s.container}>
                <a className={s.center_btn} href="#">
                    <Icon2 className={s.svg_fill}/>
                </a>
            </div>
        </div>
    )
}

export default LeftIconBar;