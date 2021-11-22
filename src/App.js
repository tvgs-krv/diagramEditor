import s from './App.module.scss';
import Toolbar from "./components/Toolbar/Toolbar";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import LeftIconBar from "./components/LeftIconBar/LeftIconBar";

import "import-jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";

import React from "react";
import jquery from "jquery";
import draw2d from "draw2d";

import DiagramEditor from "./components/DiagramEditor/DiagramEditor";
import Connection from "./components/DiagramEditor/Connection";

window.$ = window.jQuery = jquery;
window.draw2d = draw2d;
window.Connection = Connection;

function App()
{
    return (
        <div>
            <Toolbar/>
            {/*<div className={s.clearfix}>*/}
            {/*    <div >First</div>*/}
            {/*    <div>Second</div>*/}
            {/*    <div>Third</div>*/}
            {/*</div>*/}
            <div className={s.clearfix}>
                <LeftIconBar/>
                <LeftPanel/>
                <DiagramEditor/>
            </div>
        </div>
    );
}

export default App;
