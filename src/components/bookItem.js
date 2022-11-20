import React from "react"; //import react 
import Card from 'react-bootstrap/Card';  // card import

// class for the BookItem component// extends and export word used to export app.js
export class BookItem extends React.Component {
    render() {
              // returning component

        // returns the format of the book data back to the "books" class, which in turn sends it back to the "read" class

        return (
            <div>
                {/* <h4>{this.props.book.title}</h4>
        <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}

                <Card>
            <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
       <blockquote className="blockquote mb-0">
            <img src={this.props.book.cover}></img>
            <footer >
                {this.props.book.authour}
                    </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        ); //return
    } //render
} //class
