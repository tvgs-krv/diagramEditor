import React, {useEffect, useRef, useState} from "react";
import s from "./Profile.module.scss"
import {ReactComponent as UserLogo} from "../../Images/Svg/user-circle-solid.svg";
import {Link} from "react-router-dom";


const Profile = () => {
    const imgUrl = "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8c8ecf23475771.56323fdddcb3d.jpg"
    return (
        <div>
            <div className={s.profile_sidebar}>
                <div className={s.photo}><img src={imgUrl} alt="Ваше фото"/></div>
                <div className={s.name}><span>ЗИНАИД ЕВКАКЬЕВИЧ</span></div>
                <div className={s.profile_link}><a href="#">Проекты</a></div>
                <div className={s.profile_link}><a href="#">Настройки</a></div>
                <div className={s.profile_link}><a href="#">Крендельки</a></div>
            </div>

            <div className={s.profile_content}>
                Content
            </div>
        </div>
    )
}

export default Profile;