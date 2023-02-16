import React from "react";

const Modal = ({show,item,onClose}) => {
    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
            <button className="close" type="submit" onClick={onClose}><img src="./images/close.png" height={35}></img></button>
                <div className="inner-box">
                    <img src={thumbnail} alt=""/>
                    <div className="info">
                    <h4>{item.volumeInfo.categories[0]}</h4>
                    <h3>{item.volumeInfo.title}</h3>
                    <h4>{item.volumeInfo.authors}</h4>
                    <h5 className="description">{item.volumeInfo.description}</h5>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Modal;