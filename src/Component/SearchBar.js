import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class SearchBar extends React.Component{

    static propTypes={
        handelSearch:PropTypes.func
    }

    render(){
        return (
            <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" onChange={(e)=>{
                  this.props.handelSearch(e.target.value)
                }} placeholder="Search by title or author"/>
            
            </div>
            </div>
        );
    }
}

export default SearchBar;





