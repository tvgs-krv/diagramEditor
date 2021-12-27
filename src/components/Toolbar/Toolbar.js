import React, {useEffect, useRef, useState} from "react";
import style from "./Toolbar.module.scss";
import {ReactComponent as MenuIcon} from "../../Images/Svg/extended_menu.svg";
import {ReactComponent as SaveIcon} from "../../Images/Svg/save-regular.svg";
import {ReactComponent as UndoIcon} from "../../Images/Svg/undo-alt-solid.svg";
import {ReactComponent as RedoIcon} from "../../Images/Svg/redo-alt-solid.svg";
import {ReactComponent as DownloadIcon} from "../../Images/Svg/download-solid.svg";
import {ReactComponent as UserLogo} from "../../Images/Svg/user-circle-solid.svg";

let showUserMenu=()=>{
    console.log("test")
}
function Toolbar() {
    const [width, setWidth] = useState(0);
    const profileMenuRef = useRef(null);

    useEffect(() =>{
        const userMenuWidth = profileMenuRef.current.getBoundingClientRect().width;
        setWidth(userMenuWidth);
    });
    return (
        <div className={style.toolbar_view}>
            <div className={style.group_button}>
                <div className={style.common_button}>
                    <span className={style.svg_container}>
                        <MenuIcon className={style.svg_fill}/>
                    </span>
                </div>
                <div className={style.common_button}>
                    <span className={style.svg_container}>
                        <SaveIcon className={style.svg_fill}/>
                    </span>
                </div>
                <div className={style.common_button}>
                    <span className={style.svg_container}>
                        <UndoIcon className={style.svg_fill}/>
                    </span>
                </div>
                <div className={style.common_button}>
                    <span className={style.svg_container}>
                        <RedoIcon className={style.svg_fill}/>
                    </span>
                </div>
                <div className={style.common_button}>
                    <span className={style.svg_container}>
                        <DownloadIcon className={style.svg_fill}/>
                    </span>
                </div>
            </div>
            <div className={style.project_name}>Наименование проекта</div>
            <nav className={style.profile_menu}>
                <ul>
                    <li><div ref={profileMenuRef} className={style.profile_menu_user_logo} onClick={showUserMenu}>
                        <UserLogo className={style.logo_fill}/>
                        Роман Коваленко
                    </div>
                        <ul className={style.profile_sub_menu}>
                            <li><a style={{width: width + 'px'}} href="#">Профиль</a></li>
                            <li><a style={{width: width + 'px'}} href="#">Настройки</a></li>
                            <li><a style={{width: width + 'px'}} href="#">Выйти</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            {/*<div className={style.main_menu}></div>*/}
        </div>
    )
}

export default Toolbar