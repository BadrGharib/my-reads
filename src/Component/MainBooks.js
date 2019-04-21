import React from 'react'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class MainBooks extends React.Component{

    static propTypes={
        books:PropTypes.array,
        handelUpdateBook:PropTypes.func
    }

    render(){
        return(
            <div className="list-books">

                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>

                 <div className="list-books-content">
                   <div>
                     <Shelf title='Want to Read' handelUpdateBook={this.props.handelUpdateBook} books={this.props.books.filter((book)=>book.shelf==='wantToRead')}/>
                     <Shelf title='Read' handelUpdateBook={this.props.handelUpdateBook} books={this.props.books.filter((book)=>book.shelf==='read')}/>
                     <Shelf title='Currently Reading' handelUpdateBook={this.props.handelUpdateBook} books={this.props.books.filter((book)=>book.shelf==='currentlyReading')}/>
                   </div>
                 </div>

                 <div> 
                   <Link to='/search' className="open-search" ><button/></Link>
                 </div>
          </div>
            
          );
    }

}

export default MainBooks;