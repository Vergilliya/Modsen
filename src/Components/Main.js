import React, {useState} from "react";
import Card from "./Card";
import Found from "./Found";
import axios from "axios";

var booksCount = 0;
var foundResults = 0;
var lastSearch = '';
const Main = () => {
    const [search, setSearch]=useState('');
    const [bookData,setData] = useState([]);
    const searchBook = (event) => {
        if (event.type === 'click' || event.key === 'Enter') {
            if (lastSearch !== search) booksCount = 0;
            booksCount += 30;
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyC_3uMN114YXaJQqNw2EgpEhtfc-QT9u88'+`&maxResults=${booksCount}`)
            .then(res => {
                setData(res.data.items);
                foundResults = res.data.totalItems;
            })
            .catch(err => console.log(err));
            lastSearch = search;
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
                    <button type="submit" onClick={searchBook}><img src="./images/search.png" height={35}></img></button>
                </div>
                <div className="categories-sort">
                    <div className="categories">
                        <h2>Categories</h2>
                        <select>
                            <option value='1'>all</option>
                            <option value='2'>art</option>
                            <option value='3'>biography</option>
                            <option value='4'>computers</option>
                            <option value='5'>history</option>
                            <option value='6'>medical</option>
                            <option value='7'>poetry</option>
                        </select>
                    </div>
                    <div className="sort">
                        <h2>Sorting by</h2>
                        <select>
                            <option value='8'>revelance</option>
                            <option value='9'>newest</option>
                        </select>
                    </div>
                </div>
            </div>
            <img className="bg-img" src="./images/bg.png"></img>
        </div>
        <Found results={foundResults}/>
        <div className="container">
            {
                <Card book={bookData}/>
            }
        </div>
        <div className="more-books">
            <button onClick={searchBook}>Load more</button>
        </div>
        </>
    );
}
export default Main;