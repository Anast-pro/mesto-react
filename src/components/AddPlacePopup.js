import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: name,
            link: link,
        });
    }


    return (
        <PopupWithForm isOpen={props.isOpen ? "popup_opened" : ""}
                       onClose={props.onClose}
                       onSubmit={handleSubmit}
                       name="newplace"
                       title="Новое место">
            <div>
                <input
                    id="placename"
                    type="text"
                    minLength="2"
                    maxLength="30"
                    placeholder="Название"
                    name="placename"
                    className="popup__input popup__form-information popup__form-information_placename"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                <span id="placename-error" className="error"></span>
            </div>
            <div>
                <input
                    id="placeimage"
                    type="url"
                    name="placeimage"
                    className="popup__input popup__form-information popup__form-information_placeimage"
                    placeholder="Ссылка на картинку"
                    value={link}
                    onChange={handleLinkChange}
                    required
                />
                <span id="placeimage-error" className="error"></span>
            </div>
            <button
                type="submit"
                className="popup__button popup__button_place"
            >
                Создать
            </button>
        </PopupWithForm>
    );
}

export default AddPlacePopup;

//спасибо за ревью) надеюсь, в этот раз я правильно поняла задачу
