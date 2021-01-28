import React from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    //const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState();



    function handleCardClick(cardId) {
            setSelectedCard(cardId)
        }

    function handleEditAvatarClick() {
            setIsEditAvatarPopupOpen(true);
        }

    function handleEditProfileClick() {
            setIsEditProfilePopupOpen(true);
        }

    function handleAddPlaceClick() {
            setIsAddPlacePopupOpen(true);
        }

    function closeAllPopups() {
            setIsEditProfilePopupOpen(false);
            setIsAddPlacePopupOpen(false);
            setIsEditAvatarPopupOpen(false);
            setSelectedCard('');
        }



  return (
        <div className="page">
          <div className="page__container">
              <Header/>
              <Main
                  onEditProfile={handleEditProfileClick}
                  onEditAvatar={handleEditAvatarClick}
                  onAddPlace={handleAddPlaceClick}
                //  onImageClick={handleImageClick}
                  onCardClick={handleCardClick}
              />
              <Footer/>

     <PopupWithForm isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups} name="userinfo" title="Редактировать профиль">

         <div>
            <input
                id="name"
                type="text"
                minLength="2"
                maxLength="40"
                name="name"
                className="popup__input popup__form-information popup__form-information_name"
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
                name="aboutme"
                className="popup__input popup__form-information popup__form-information_aboutme"
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

   <PopupWithForm isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups} name="newplace" title="Новое место">
                  <div>
                      <input
                          id="placename"
                          type="text"
                          minLength="2"
                          maxLength="30"
                          name="placename"
                          className="popup__input popup__form-information popup__form-information_placename"
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


              <PopupWithForm isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups} name="newavatar" title="Обновить аватар">

                  <div>
                      <input
                          id="avatar"
                          type="text"
                          minLength="2"
                          maxLength="40"
                          name="name"
                          className="popup__input popup__form-information popup__form-information_avatar"
                          required
                      />
                      <span id="avatar-error" className="error"></span>
                  </div>
                  <button
                      type="submit"
                      className="popup__button popup__button_avatar"
                  >
                      Создать
                  </button>
              </PopupWithForm>

              {/*  <PopupWithForm isOpen={isDeleteCardPopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups} name="confirmation" title="Вы уверены?">
                  <button
                      type="submit"
                      className="popup__button popup__button_confirmation"
                  >
                      Да
                  </button>
              </PopupWithForm> */}

    <ImagePopup  isOpen={selectedCard ? 'popup_opened' : ''} card={selectedCard} onClose={closeAllPopups}/>

    </div>
          </div>
);
        }

export default App;