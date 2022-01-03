import Toolbar from "../components/Toolbar/Toolbar";
import s from "../App.module.scss";
import LeftIconBar from "../components/LeftIconBar/LeftIconBar";
import LeftPanel from "../components/LeftPanel/LeftPanel";
import DiagramEditor from "../components/DiagramEditor/DiagramEditor";
import React from "react";


const DiagramEditorPage = ()=>{
    return(
        <>
            <Toolbar/>
            <div className={s.clearfix}>
                <LeftIconBar/>
                <LeftPanel/>
                <DiagramEditor/>
            </div>
        </>
    )
}

export default DiagramEditorPage;