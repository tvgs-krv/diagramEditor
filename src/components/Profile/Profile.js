import React, {useEffect, useRef, useState} from "react";
import s from "./Profile.module.scss"
import Projects from "./Projects/Projects";
import {NavLink, Route, Routes} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Settings from "./Settings/Settings";


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
        <>
            <Sidebar url={data.image.url} alt={data.image.alt} name={data.name}/>
            <div className={s.profile_content}>
                <Routes>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </>
    )
}

export default Profile;