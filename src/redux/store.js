import {createStore} from 'redux'
import reducer from './cart/cartReducer'
import logger from 'redux-logger'
import {applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';



const store=createStore(reducer,composeWithDevTools(applyMiddleware(logger)))


export default store