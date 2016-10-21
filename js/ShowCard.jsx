const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter

class ShowCard extends React.Component {
  constructor (props){
    super(props)
  }
  render(){
    return(
      <Link to ={`/details/${this.props.id}`}>
      <div className='show-card'>
      <img src={`./public/img/posters/${this.props.poster}`} className='show-card-img' />
      <div className='show-card-text'>
      <h3 className='show-card-title'>{this.props.title}</h3>
      <h4 className='show-card-year'>({this.props.year})</h4>
      <p className='show-card-description'>{this.props.description}</p>
      </div>
      </div>
      </Link>
    )
  }
}

ShowCard.propTypes = {
    year: React.PropTypes.string.isRequired,
    poster: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
}

module.exports = ShowCard