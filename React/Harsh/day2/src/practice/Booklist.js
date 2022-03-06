import React, { Component } from "react";
import Book from "./Book";
import BooksList from "./BooksData";
export default class BookList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { books: BooksList };
  // }
  state = {
    books: BooksList,
  };

  handleDelete = (id) => {
    const sortedBook = this.state.books.filter((item) => item.id !== id);
    this.setState({
      books: sortedBook,
    });
  };
  render() {
    var books = this.state.books;
    return (
      <section>
        <h3>This is our Booklist</h3>
        <div className="book">
          {books.map((elem) => {
            return (
              <Book
                key={elem.id}
                book={elem}
                handleDelete={this.handleDelete}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
