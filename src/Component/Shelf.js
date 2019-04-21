import React from 'react'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'
class Shelf extends React.Component{

    static propTypes={
        books:PropTypes.array,
        handelUpdateBook:PropTypes.func
    }

    render(){
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.title}</h2>
              <div className="bookshelf-books">
                <BooksGrid handelUpdateBook={this.props.handelUpdateBook} books={this.props.books}/>
              </div> 
            </div>
        );
    }
}

export default Shelf;