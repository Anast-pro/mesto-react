import React from 'react';
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__main">
                    <div className="profile__edit-avatar">
                        <img
                            className="profile__avatar"
                            alt="avatar"
                            src={currentUser.avatar}
                        />
                        <button
                            className="profile__avatar-button button"
                            type="button"
                            onClick={props.onEditAvatar}
                        ></button>
                    </div>

                    <div className="profile__info-wrap">
                        <div className="profile__info">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <p className="profile__aboutme">{currentUser.about}</p>
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
                {props.cards.map((item, index) =>
                    <Card cardData={item}
                          key={index}
                          onCardClick={props.onCardClick}
                          onCardLike={props.onCardLike}
                          onDeleteClick={props.onDeleteClick}
                    />
                )}
            </section>
        </main>
    );
}

export default Main;