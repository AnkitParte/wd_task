import { legacy_createStore } from 'redux'
import rootReducer from './reducer'

//redux store init
const store = legacy_createStore(rootReducer)

export default store
