import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import your Module reducers here and combine them
import home from './home/reducers'
import campaigns from './campaigns/reducers'

const rootReducer = combineReducers({
	home,
    campaigns,
	router: routerReducer
});

export default rootReducer;