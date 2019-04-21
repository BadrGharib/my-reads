import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import SearchGrid from './SearchGrid'

class MainSearch extends React.Component{

   
    static propTypes={
        searchBooks:PropTypes.array,
        books:PropTypes.array,
        handelSearch:PropTypes.func,
        handelUpdateBook:PropTypes.func
    }

    render(){
        return(
          <div className="search-books">
            <SearchBar handelSearch={this.props.handelSearch}/>
            <SearchGrid searchBooks={this.props.searchBooks} books={this.props.books} handelUpdateBook={this.props.handelUpdateBook}/>
          </div>
            );
    }
}

export default MainSearch;