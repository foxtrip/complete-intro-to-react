import React from 'react'
import Header from './Header'
import { connector } from './Store'
import axios from 'axios'

class Details extends React.Component {
    constructor(props){
        super(props)

        this.state = {  // check the IMDB rating
            omdbData: {}
        }
    }
    componentDidMount () {
        console.log('here', this.props.shows[this.props.params.id].imdbID)
        axios.get(`http://www.omdbapi.com/?i=${this.props.shows[this.props.params.id].imdbID}`)
        .then((response) => {
            this.setState({omdbData: response.data})
        })
        .catch((error) => {
            console.log('axios error', error)
        })
    }
    render(){
        const { title, description , year , poster , trailer } = this.props.shows[this.props.params.id]
        let rating 
        if(this.state.omdbData.imdbRating) {
            rating = <h3 className='video-rating'> {this.state.omdData.imdRating}</h3>
        }
        return(
            <div className = 'container'>
                <Header />
                <div className='video-info'>
                    <h1 className = 'video-title'>{title}</h1>
                    <h2 className='video-year'>({year})</h2>
                    {rating}
                    <img className='video-poster' src={`/public/img/posters/${poster}`} />
                    <p className='video-description'>{description}</p>
                </div>
                <div className='video-container'>
                    <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen ></iframe>
                </div>
            </div>
        )
    }
}

Details.propTypes = {
  params: React.PropTypes.object,
  shows: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = connector(Details)
