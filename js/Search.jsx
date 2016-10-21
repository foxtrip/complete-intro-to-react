import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
import { connector } from './Store'

class Search extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const searchTerm = this.props.searchTerm || ''
        return (
            <div className='container'>
                <Header showSearch />
                <div className='shows'>
                    { this.props.shows
                        .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
                        .map((show, index) => (
                        <ShowCard {...show} key={index} id={index} />
                    ))}
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    shows: React.PropTypes.arrayOf(React.PropTypes.object),//store에서 바로 받아옴
    searchTerm: React.PropTypes.string
}

module.exports = connector(Search)