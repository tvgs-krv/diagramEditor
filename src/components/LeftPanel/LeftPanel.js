import React from "react";
import s from "./LeftPanel.module.scss"

import "import-jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";

import jquery from "jquery";
window.$ = window.jQuery = jquery;

function LeftPanel()
{
    return (
        <div className={s.left_panel}>
            <div id="navigation" className="">
                <div data-shape="shape1"
                     className={s.palette_node_element + ' ' + "draw2d_droppable"}>Start
                </div>
                <div data-shape="shape2"
                     className={s.palette_node_element + ' ' + "draw2d_droppable"}>End
                </div>
                <div data-shape="shape3"
                     className={s.palette_node_element + ' ' + "draw2d_droppable"}>Between
                </div>
            </div>
        </div>
    )
}

export default LeftPanel