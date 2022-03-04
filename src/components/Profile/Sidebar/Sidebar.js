import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Sidebar.module.scss";


const Sidebar = ({url, alt, name}) => {

    const menuItems = [
        {"item": "Сервисы", "url": "/projects"},
        {"item": "Проекты", "url": "/settings"},
        {"item": "Корзина", "url": "#"},
        {"item": "Настройки", "url": "#"}
    ]
return(
    <div className={s.profile_sidebar}>
        <div className={s.photo}><img src={url} alt={alt}/></div>
        <div className={s.name}><span>{name.toUpperCase()}</span></div>
        <ul className={s.profile_ul}>
            {menuItems.map((item, index) => (
                <li key={index} className={s.profile_link}>
                    {/*<a href={item.url}>{item.item}</a>*/}
                    <NavLink to={item.url}>{item.item}</NavLink>
                </li>
            ))}
        </ul>
    </div>
)
}

export default Sidebar;