import React from 'react'
import { Link } from 'react-router'
import { connector } from './Store'//모든 component는 connector 를 이용해서 바로 store의 state 를 props로 가져올 수 있다. (굳이 search 에서 일일이 받아오지 않아도 됨.)

class Header extends React.Component {
    constructor(props){//store  에서 바로 받음.
        super(props) 
        this.handleSearchTermChange =  this.handleSearchTermChange.bind(this)
    }
    handleSearchTermChange(e){
        this.props.setSearchTerm(e.target.value)// => this.props.searchTerm =e.target.value 되게 함(실시간)
    }
    render(){
        let utilSpace
        if(this.props.showSearch){
            utilSpace = (<input type='text' className='search-input' placeholder='Search' value={this.props.searchTerm} onChange={this.handleSearchTermChange} />)
        } else {
            utilSpace = (
                <h2 className='header-back'>
                    <Link to='/search'>
                    Back
                    </Link>
                </h2>
            )
        }
        return (
            <header className ='header'>
                <h1 className = 'brand'>
                    <Link to='/' className='brand-link'>
                    svideo
                    </Link>
                </h1>
                    {utilSpace}
            </header>
        )
    }
}

Header.propTypes = {
  setSearchTerm: React.PropTypes.func,
  showSearch: React.PropTypes.bool,
  searchTerm: React.PropTypes.string
}

module.exports = connector(Header)//