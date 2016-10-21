import React from 'react'

class Layout extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className = 'app-container'>
                {this.props.children}
            </div>
        )
    }
}

Layout.propTypes = {
    children: React.PropTypes.element
}
module.exports = Layout