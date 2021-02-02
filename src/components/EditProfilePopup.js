
import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name,
            about: description,
        });
    }


    return (
        <PopupWithForm isOpen={props.isOpen ? "popup_opened" : ""}
                       onClose={props.onClose}
                       onSubmit={handleSubmit}
                       isSaving={props.isSaving}
                       name="userinfo"
                       title="Редактировать профиль">
            <div>
                <input
                    id="name"
                    type="text"
                    minLength="2"
                    maxLength="40"
                    placeholder="Имя"
                    name="name"
                    className="popup__input popup__form-information popup__form-information_name"
                    onChange={handleNameChange}
                    required
                />
                <span id="name-error" className="error"></span>
            </div>
            <div>
                <input
                    id="about"
                    type="text"
                    minLength="2"
                    maxLength="40"
                    placeholder="Род деятельности"
                    name="aboutme"
                    className="popup__input popup__form-information popup__form-information_aboutme"
                    onChange={handleDescriptionChange}
                    required
                />
                <span id="aboutme-error" className="error"></span>
            </div>
            <button
                type="submit"
                className="popup__button popup__button_profile"
            >
                Сохранить
            </button>
        </PopupWithForm>
    );
}

export default EditProfilePopup;