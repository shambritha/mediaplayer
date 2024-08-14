import {createStore, combineReducers} from 'redux';
import folderReducer from '../components/redux/folderReducer';


const rootReducer = combineReducers({
    media: folderReducer
});
const store = createStore(rootReducer);

export default store;