import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component{

    static propTypes={
        book:PropTypes.object,
        handelUpdateBook:PropTypes.func
    }
     //update the shelf for selected book  
    handelSelect=(e)=>{
       this.props.book.shelf !== e && this.props.handelUpdateBook(this.props.book,e)
    }

    render(){
        return(
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={
                { width: 128,
                  height: 193,
                  //check if the book has image or not
                  backgroundImage: (this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) && `url(${this.props.book.imageLinks.thumbnail})` 
                }}></div>
              <div className="book-shelf-changer">
                <select value={this.props.book.shelf || 'none'} onChange={(e)=>{this.handelSelect(e.target.value)}}>
                  <option value="move" disabled>Move to...</option>
                 {/*check if the book assigned to shelf then mark shelf option*/}
                  <option value="currentlyReading">{
                      this.props.book.shelf==='currentlyReading'
                      ?'✔'
                      :"   "} Currently Reading</option>
                  <option value="wantToRead">{
                      this.props.book.shelf==='wantToRead'
                      ?'✔'
                      :"   "} Want to Read</option>
                  <option value="read">{
                      this.props.book.shelf==='read'
                      ?'✔'
                      :"   "} Read</option>
                  <option value="none"> {
                      this.props.book.shelf==='None'
                      ?'✔'
                      :"   "} None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title && this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors && this.props.book.authors}</div>
          </div>

            );
    }
}

export default Book;