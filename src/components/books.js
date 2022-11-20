
// imports react
import React from "react"; 
import {BookItem} from './bookItem';  // book item import


// class for the book component// extends and export word used to export app.js
export class Books extends React.Component{
    render(){
        
        // returning component

        //splits bookItem into 3 items because map() and 3 sets of data
        // book now holds 3 seprate bookItem's

        // "book = {book}"" passes the movie data colllection to bookItem class, that the "book" variable from 
        //" return this.props.books.map( (book)=>" got
         
        return this.props.books.map(
            (book)=>{
                return <BookItem book={book} key={book._id}></BookItem>
            }
        );
    }
}
