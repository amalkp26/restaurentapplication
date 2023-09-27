import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "./restReducer";


//reducer
const reducer=combineReducers({
reducer1:restReducer
})

// create middileware
const middileware=[thunk]

// create store

const store=createStore(reducer,applyMiddleware(...middileware))

//export
export default store