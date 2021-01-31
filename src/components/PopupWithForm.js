import closeButton from '../images/Close Icon.svg';

function PopupWithForm(props) {
    return (
        <div className={`popup popup__${props.name} ${props.isOpen}`}>
            <div className="popup__container">
                <button
                    src={closeButton}
                    alt="Закрыть"
                    className="popup__close"
                    onClick={props.onClose}
                />
                <h3 className="popup__title">{props.title}</h3>
                <form
                    className="popup__form"
                    name={props.name}
                    onSubmit={props.onSubmit}
                    noValidate
                >
                    {props.children}
                </form>
            </div>
        </div>
    );
}


export default PopupWithForm;

