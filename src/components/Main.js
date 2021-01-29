import React from 'react';
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([user, cards]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(cards.slice(0));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__main">
                    <div className="profile__edit-avatar"></div>
                    <img
                        onClick={props.onEditAvatar}
                        className="profile__avatar"
                        alt="avatar"
                        src={userAvatar}
                    />

                    <div className="profile__info-wrap">
                        <div className="profile__info">
                            <h1 className="profile__name"> {userName} </h1>
                            <p className="profile__aboutme"> {userDescription} </p>
                        </div>

                        <button
                            onClick={props.onEditProfile}
                            className="profile__edit-button"
                            type="button"
                        >
                        </button>
                    </div>

                    <button
                        onClick={props.onAddPlace}
                        className="profile__add-button"
                    >
                    </button>

                </div>
            </section>

            <section className="elements">
                {cards.map((item, index) =>
                    <Card cardData={item} key={index} onCardClick={props.onCardClick}/>
                )}
            </section>
        </main>
    );
}

export default Main;