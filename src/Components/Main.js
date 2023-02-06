import React, {useState} from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
    const [search, setSearch]=useState('');
    const [bookData,setData] = useState([]);
    const searchBook = (event) => {
        if (event.key === 'Enter') {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyC_3uMN114YXaJQqNw2EgpEhtfc-QT9u88')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Search for books</h1>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value = {search} onChange = {e => setSearch(e.target.value)}
                        onKeyPress = {searchBook}/>
                        <button type="submit"><img src="./images/search.png" height={35}></img></button>
                    </div>
                </div>
                <img className="bg-img" src="./images/bg.png"></img>
            </div>
            <div className="container">
                {
                    <Card book={bookData}/>
                }
            </div>
        </>
    );
}
export default Main;