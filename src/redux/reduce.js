import { combineReducers } from 'redux'
import { mangaReducer } from './mangaReducer'

const rootReducer = combineReducers({
	mangaReducer,
})

export default rootReducer
