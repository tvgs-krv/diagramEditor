import React from "react";
import s from "./LeftPanel.module.scss"
import {ReactComponent as CommonValve} from "../../Images/Svg/Items/common_valve.svg";


import "import-jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";

import jquery from "jquery";
import {ReactComponent as DiagramIcon} from "../../Images/Svg/diagram_icon.svg";

window.$ = window.jQuery = jquery;

function LeftPanel() {
    return (
        <div className={s.left_panel}>
            <div id="navigation" className="">
                <CommonValve data-shape="CommonValve" className={s.common_item + " draw2d_droppable"}/>
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