import React from "react";
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm name="newavatar"
                       title="Обновить аватар"
                       isOpen={props.isOpen ? "popup_opened" : ""}
                       onClose={props.onClose}
                       onSubmit={handleSubmit}
                       isSaving={props.isSaving}>
            <div>
                <input
                    id="avatar"
                    type="url"
                    minLength="2"
                    placeholder="Ссылка на картинку"
                    name="avatar"
                    className="popup__input popup__form-information popup__form-information_avatar"
                    ref={avatarRef}
                    value={props.value}
                    required
                />
                <span id="avatar-error" className="error"> </span>
            </div>
            <button
                type="submit"
                className="popup__button popup__button_avatar"
            >
                Создать
            </button>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;