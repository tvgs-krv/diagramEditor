import React from "react";
import style from "./Toolbar.module.scss";
import {ReactComponent as MenuIcon} from "../../Images/Svg/extended_menu.svg";

function Toolbar()
{
    return (
        <div className={style.toolbar_view}>
            <div className={style.first_button}>
                    <span className={style.svg_container}>
                        <MenuIcon className={style.svg_fill}/>
                    </span>
            </div>
        </div>
    )
}

export default Toolbar