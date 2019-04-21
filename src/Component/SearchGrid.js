import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


class SearchGrid extends React.Component{

   

    static propTypes={
        searchBooks:PropTypes.array,
        books:PropTypes.array,
        handelSearch:PropTypes.func,
        handelUpdateBook:PropTypes.func
    }

    render(){
        return(
            <div className="search-books-results">
            <ol className="books-grid">
            {
               Array.isArray(this.props.searchBooks) && this.props.searchBooks.map((book)=>{
                  // check if this book exist in any shelf to update it in the search page
                  const shelfBook= Array.isArray(this.props.books) && this.props.books.find(x => x.id === book.id);
                  book.shelf= (shelfBook) && shelfBook.shelf;
                    return (
                        <li key={book.id} >
                          <Book handelUpdateBook={this.props.handelUpdateBook} book={book}/>
                        </li>
                        )
                })
            }
            </ol>
            </div>
            );
    }
}

export default SearchGrid;