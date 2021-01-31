import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const cardData = props.cardData;
    const isOwn = props.cardData.owner._id === currentUser._id;
    const isLiked = props.cardData.likes.some((i) => i._id === currentUser._id);

    const cardLikeButtonClassName = `element__like ${
        isLiked ? "element__like_liked" : "element__like_unliked"
    }`;

    const cardDeleteButtonClassName = (
        `element__trash ${isOwn ? 'element__trash_visible' : 'element__trash_hidden'}`
    );

    function handleClick() {
        props.onCardClick(cardData.link);
    }

    function handleLike() {
        props.onCardLike(props.cardData);
    }

    function handleDeleteClick() {
        props.onDeleteClick(props.cardData);
    }

    return (
        <div className="element">
            <div
                className="element__photo"
                style={{backgroundImage: `url(${cardData.link})`}}
                onClick={handleClick}
            >
                <button className={cardDeleteButtonClassName}
                        onClick={handleDeleteClick}
                >
                </button>
            </div>
            <div className="element__info">
                <h3 className="element__title">{cardData.name}</h3>
                <div className="element__like-group">
                    <button className={cardLikeButtonClassName}
                            onClick={handleLike}
                            type="button"></button>
                    <p className="element__like-counter">{cardData.likes.length}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;