class API {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getCards() {
        return fetch(`${this._baseUrl}/cards`, {headers: this._headers})
            .then(res => this._getResponseData(res));
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {headers: this._headers})
            .then(res => this._getResponseData(res));

    }

    addCard(card) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(card)
        })
            .then(res => this._getResponseData(res));
    }

    editUserInfo(info) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(info)
        })

            .then(res => this._getResponseData(res));
    }


    editUserAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatar)
        })
            .then(res => this._getResponseData(res));
    }


    changeLikeCardStatus(id, isLiked) {
        if (isLiked) {
            return fetch(`${this._baseUrl}/cards/likes/${id}`, {
                method: "PUT",
                headers: this._headers
            })
                .then(res => this._getResponseData(res));
        } else {
            return fetch(`${this._baseUrl}/cards/likes/${id}`, {
                method: "DELETE",
                headers: this._headers
            })
                .then(res => this._getResponseData(res));
        }
    }


    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => this._getResponseData(res));
    }
}

const api = new API({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-18',
    headers: {
        authorization: '9d674f7b-2a9e-4e8a-af7b-88d210976df9',
        'Content-Type': 'application/json'
    }
})

export default api;