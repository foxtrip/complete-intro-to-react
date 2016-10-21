//import redux from 'redux'
//import reactRedux from 'react-redux'
import { createStore, compose } from 'redux'
import { connect } from 'react-redux'
const data = require('../public/data')  //  DATA 연결. 

const SET_SEARCH_TERM = 'setSearchTerm' //  2. action을 설정(명명)한다. 보통 여러개.   

const initialState ={                   //  1. 가져온 DATA 로 initialState 설정
    searchTerm: '',
    shows: data.shows
} 

const reducer = (state = initialState , action) => {   //  3. reducer: 각종 action type마다 action(f) 를 설정해서 state 를 변형하여 반환한다. 실질적으로 일하는 애
    switch (action.type) {
        case SET_SEARCH_TERM://action type 마다 다른 reducer(pure function)
            //{searchTerm: setSearchTerm}반환. 
            const newState = {}//기존 state는 절대 변형하지 않으므로 늘 newState와 Object.assign하는 과정 필요함. 
            Object.assign(newState, state , {searchTerm: action.value})//1)기존 state를 2){searchTerm: action.value(여기서는 'setSearchTerm')}로 변환하여 3)newState로 복사하여 4)반환 즉 state 대신 {searchTerm: setSearchTerm} 반환
            return newState
        default:
            return state
    }
}

// { store }                                        
const store = createStore(reducer, initialState, compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

// { connector }
const mapStateToProps = (state) => ({ searchTerm: state.searchTerm, shows: state.shows }) //  helper1 : 전체 시스템의 state Tree (무조건 한개. 변형불가)를 스토어 => 컴포넌트로 전달
const mapDispatchToProps = (dispatch) => {  //helper2 :  하위 컴포넌트에서 올라오는 요청(dispatch)을 해석하여 시스템의 어느 쪽으로 요청을 전달(mapDispatchToProps) 할 것인지를 결정
    return { setSearchTerm: (term) => { dispatch({type: SET_SEARCH_TERM, value: term}) } } //component 에서 setSearchTerm(term)을 dispatch 시에는 {type:SET_SEARCH_TERM, value:term}을 dispatch
}

const connector = connect(mapStateToProps, mapDispatchToProps) 
module.exports = { connector, store }