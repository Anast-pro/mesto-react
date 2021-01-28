import React from "react";
import closeButton from "../images/Close Icon.svg";

function ImagePopup(props) {
    return (
        <div className={`popup popup_fullimage ${props.isOpen}`}>
            <div className="popup__container-image">
                <button
                    src={closeButton}
                    alt="Закрыть"
                    className="popup__close popup__close_fullscreen"
                    onClick={props.onClose}
                />
                <img className="popup__image" alt="" src={props.card}/>
                <h3 className='popup__title popup__title_image'>{props.title}</h3>
            </div>
        </div>
    );
}

export default ImagePopup;