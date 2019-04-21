import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import MainSearch from './MainSearch'
import MainBooks from './MainBooks'
 

class Container extends React.Component {
  state = {
    books:[],//shelf's books
    searchBooks:[] //search's books
  }
   //get shelf's books
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
     (Array.isArray(books)) &&
      this.setState(()=>({
        books:books
      }))
      console.log(books);
    })
  }
  //update book shelf in both shelf and search
  updateBook=(book,shelf)=>{
    debugger;
    BooksAPI.update(book,shelf).then(()=>{
      this.setState((currentState)=>{ //set state with the updated values
        debugger;
        book.shelf=shelf;//update the book shelf
        const bookIndex = currentState.books.findIndex(x => x.id === book.id);//get book index in shelf's books
        bookIndex === -1//check if the book exist to update or add
        ?
         currentState.books= currentState.books.concat([book])//add book to the shelf
        :
         currentState.books[bookIndex].shelf=shelf;//update the book shelf

        const bookIndexSearch = currentState.searchBooks.findIndex(x => x.id === book.id);//get book index in search books
         if( bookIndexSearch !== -1){
          currentState.searchBooks[bookIndexSearch].shelf =shelf
        } //update book shelf in search books
        return {
          books:currentState.books,
          searchBooks:currentState.searchBooks
          }
      })
    })
  }
 //search
  search=(query)=>{
    debugger;
   query.trim() !==""//check if the search query is empty
   ?
    BooksAPI.search(query).then((books)=>{
      debugger;
        (Array.isArray(books))//check if the result is array of books not object 
        ?
          this.setState(()=>({
            searchBooks:books
          }))
        :
          this.setState(()=>({
            searchBooks:[]
          }))
      })
   :
    this.setState(()=>({
        searchBooks:[] //set empty array because the query is empty
      }))

  }

  render() {
    return (
      <div>
       {/* set the route to MainBooks page */}
      <Route path='/' exact render={()=>(
        <MainBooks books={this.state.books} 
                  handelUpdateBook={this.updateBook}/>
      )}/>
      {/* set the route to MainSearch page */}
      <Route path='/search' render={()=>(
         <MainSearch searchBooks={this.state.searchBooks} 
                      books={this.state.books}
                      handelSearch={this.search} 
                      handelUpdateBook={this.updateBook}/>
       )}/>
        
      </div>
    )
  }
}

export default Container
