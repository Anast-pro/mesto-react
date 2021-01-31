import React from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import api from '../utils/api';
import {CurrentUserContext} from "../contexts/CurrentUserContext";


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState();
    const [isSaving, setIsSaving] = React.useState(false);


    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([user, cards]) => {
                setCurrentUser(user);
                setCards(cards.slice(0, 200));
            })
            .catch((err) => console.log(err));
    }, []);


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

    function handleCardLike(card) {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api
            .changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
                setCards(newCards);
            })
            .catch((err) => console.log(err));
    }

    function handleCardDelete(card) {
        setIsSaving(true);
        api
            .deleteCard(card._id)
            .then(() => {
                const newCards = cards.filter((c) => c._id !== card._id);
                setCards(newCards);
            })
            .catch((err) => console.log(err))
            .finally(() => closeAllPopups());
    }

    function handleUpdateUser(user) {
        setIsSaving(true);
        api
            .editUserInfo(user)
            .then((user) => setCurrentUser(user))
            .catch((err) => console.log(err))
            .finally(() => closeAllPopups());
    }

    function handleUpdateAvatar(avatar) {
        setIsSaving(true);
        api
            .editUserAvatar(avatar)
            .then((avatar) => setCurrentUser(avatar))
            .catch((err) => console.log(err))
            .finally(() => closeAllPopups());
    }

    function handleAddPlaceSubmit(card) {
        setIsSaving(true);
        api
            .addCard(card)
            .then((card) => setCards([card, ...cards]))
            .catch((err) => console.log(err))
            .finally(() => closeAllPopups());
    }


    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard('');
        setSelectedCard("");
        setIsSaving(false);
    }


    return (
        <div className="page">
            <div className="page__container">
                <CurrentUserContext.Provider value={currentUser}>
                    <Header/>
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onEditAvatar={handleEditAvatarClick}
                        onAddPlace={handleAddPlaceClick}
                        cards={cards}
                        selectedCard={selectedCard}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onDeleteClick={handleCardDelete}
                    />
                    <Footer/>

                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                        isSaving={isSaving}
                    />

                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                        isSaving={isSaving}
                    />
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                        isSaving={isSaving}
                    />
                    <ImagePopup
                        isOpen={selectedCard ? "popup_opened" : ""}
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />


                </CurrentUserContext.Provider>
            </div>
        </div>
    );
}

export default App;