import React from 'react'
import { Link, hashHistory } from 'react-router'
// const Store = require('./Store')
import { connector } from './Store'//REDUX CONNECTOR HELPER

class Landing extends React.Component {
    constructor(props){
        super(props)// props: STORE의 DATA 가져옴 
        this.handleTermEvent = this.handleTermEvent.bind(this)
        this.goToSearch = this.goToSearch.bind(this)
    }
    handleTermEvent (e) {
        console.log(e.target.value)
        this.props.setSearchTerm(e.target.value)//=> this.props.searchTerm =e.target.value 되게 함(실시간)
    }   
    goToSearch (e) {
        hashHistory.push('/search')//form을 submit 시, search 에 hashHistory 를 보낸다. 
        e.preventDefault()//.......?
    }
    render() {
        return(
            <div className= 'app-container'>
                <div className= 'home-info'>
                    <h1 className='title'>svideo</h1>
                    <form onSubmit = {this.goToSearch}>
                        <input onChange={this.handleTermEvent} className='search' type='text' value={this.props.searchTerm} placeholder='Search' />
                    </form>
                    <Link to ='/search' className = 'browse-all'>or Browse All</Link>
                </div>
            </div>
        )
    }
}

Landing.propTypes = {
  setSearchTerm: React.PropTypes.func,
  searchTerm: React.PropTypes.string
}

module.exports = connector(Landing)
//connector? 
//1. React Component(Landing) 를 Redux Store에  ‘연결’하고  
//2. (Landing)의 props 를 {store}의 데이터에 '연결'하여 새로운 component를 return 하는 함수. 