import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Card = ({book}) => {
    console.log(book);
    const [show,setShow] = useState(false);
    const [bookItem,setItem] = useState();
    return(
        <>
        {
            book.map((item => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                if (thumbnail != undefined) {
                    return (
                        <>
                        <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                            <img src={thumbnail} alt="" />
                            <div className="bottom">
                                <h4 className="category">{item.volumeInfo.categories[0]}</h4>
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <h4 className="author">{item.volumeInfo.authors}</h4>
                            </div>
                        </div>
                        <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                        </>
                    )
                }
            }))
        }
        </>
    );
}
export default Card;