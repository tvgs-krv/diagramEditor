import React, {useState} from 'react';
import s from './LeftIconBar.module.scss';
import {ReactComponent as InitialData} from "../../Images/Svg/initial_data_icon.svg";
import {ReactComponent as DiagramIcon} from "../../Images/Svg/diagram_icon.svg";
import {ReactComponent as Icon1} from "../../Images/Svg/angle-double-down-solid.svg";
import {ReactComponent as Icon2} from "../../Images/Svg/car-alt-solid.svg";
import Modal from "../Modals/Modal";

const LeftIconBar = () => {
    const [active, setActive] = useState(false);
    return (
        <div className={s.left_bar}>
            <Modal active={active} setActive={setActive}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error explicabo impedit nisi, non
                    numquam odit quis ratione vel voluptas. Asperiores assumenda iure natus placeat quae repellat rerum
                    suscipit voluptatibus.</p>
            </Modal>
            <div className={s.container}>
                <a className={s.center_btn} href="#" onClick={() => setActive(true)}>
                    <InitialData className={s.svg_fill}/>
                </a>
            </div>
            <div className={s.container}>
                <a className={s.center_btn} href="#">
                    <DiagramIcon className={s.svg_fill}/>
                </a>
            </div>
            <div className={s.container}>
                <a className={s.center_btn} href="#">
                    <Icon1 className={s.svg_fill}/>
                </a>
            </div>
            <div className={s.container}>
                <a className={s.center_btn} href="#">
                    <Icon2 className={s.svg_fill}/>
                </a>
            </div>
        </div>
    );
};

export default LeftIconBar;