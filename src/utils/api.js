class API {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
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

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => this._getResponseData(res));
    }

    editUserInfo(name, info) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: info
            })
        })
            .then(res => this._getResponseData(res));
    }

    editUserAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link
            })
        })
            .then(res => this._getResponseData(res));
    }


    likeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(res => this._getResponseData(res));
    }


    unlikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => this._getResponseData(res));
    }


    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
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