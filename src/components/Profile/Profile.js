import React, {useEffect, useRef, useState} from "react";
import s from "./Profile.module.scss"


const Profile = () => {

    const data = {
        id: 1,
        name: "Имя Фамилия",
        image: {
            url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8c8ecf23475771.56323fdddcb3d.jpg",
            alt: "Ваше фото"
        },
        "projects": [
            {
                "id": 1,
                "type": "diagram",
                "name": "test1",
                "creationDate": "04.04.2022",
                "modifiedDate": "04.04.2022",
                "description": "Описание проекта тест1"
            },
            {
                "id": 2,
                "type": "diagram",
                "name": "test2",
                "creationDate": "04.04.2022",
                "modifiedDate": "04.04.2022",
                "description": "Описание проекта тест2"
            }
        ]
    }
    const [getData, setData] = useState(data);

    return (
        <div>
            <div className={s.profile_sidebar}>
                <div className={s.photo}><img src={getData.image.url} alt={getData.image.alt}/></div>
                <div className={s.name}><span>{getData.name.toUpperCase()}</span></div>
                <div className={s.profile_link}><a href="#">Сервисы</a></div>
                <div className={s.profile_link}><a href="#">Проекты</a></div>
                <div className={s.profile_link}><a href="#">Настройки</a></div>
                <div className={s.profile_link}><a href="#">Крендельки</a></div>
            </div>
            <div className={s.profile_content} projects = {getData.projects}>
                Content
            </div>
        </div>
    )
}

export default Profile;