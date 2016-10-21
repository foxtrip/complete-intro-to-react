import React from 'react'
//import ReactDOM from 'react-dom'
import Landing from './Landing'
import Layout from './Layout'
import Search from './Search'
import Details from './Details'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { store } from './Store'//REDUX STORE
import { Provider } from 'react-redux'//REDUX 

const myRoutes = (props) => (
    <Route path='/' component={Layout} >
        <IndexRoute component={Landing} />
        <Route path='/search' component={Search} />
        <Route path='/details/:id' component={Details} />
    </Route>
)
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Router history={browserHistory} >
            {myRoutes()}
            </Router>
        )
    }
}

App.routes = myRoutes//server 에서 재사용하려고 router부분만 묶음 
module.exports = App

//component modules 호출부분과 render부분을 분리한다. //server node 와의 통신문제때문에. 
// ReactDOM.render(
//     (
//     <Provider store ={store}>
//         <App/>
//     </Provider>
//     ),
//     document.getElementById('app')
// )