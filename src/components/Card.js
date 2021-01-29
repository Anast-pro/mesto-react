import React from "react";

function Card(props) {
    const cardData = props.cardData;

    function handleClick() {
        props.onCardClick(cardData.link);
    }

    return (
        <div className="element">
            <div
                className="element__photo"
                style={{backgroundImage: `url(${cardData.link})`}}
                onClick={handleClick}
            >
                <button className="element__trash"></button>
            </div>
            <div className="element__info">
                <h3 className="element__title">{cardData.name}</h3>
                <div className="element__like-group">
                    <button className="element__like" type="button"></button>
                    <p className="element__like-counter">{cardData.likes.length}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;