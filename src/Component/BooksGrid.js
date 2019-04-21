import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
class BooksGrid extends React.Component{

    static propTypes={
        books:PropTypes.array,
        handelUpdateBook:PropTypes.func
    }

    render(){
        return(

           
            <ol className="books-grid">
            {
                Array.isArray(this.props.books) && this.props.books.map((book)=>{

                    return (
                        <li key={book.id} >
                          <Book handelUpdateBook={this.props.handelUpdateBook} book={book}/>
                        </li>
                        )
                })
            }
            </ol>
        
            
            );
    }
}

export default BooksGrid;