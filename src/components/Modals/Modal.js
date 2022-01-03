import React, {useEffect, useRef, useState} from "react";
import style from "./Modal.module.scss";


const Modal = ({active, setActive, children}) => {
    return (
        <div className= {active ?  style.modal +" "+ style.active :  style.modal} onClick={()=>setActive(false)}>
            <div className={style.modalContent} onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;