import { combineReducers } from 'redux';
import caminhoReducer from './caminho/caminhoReducer';

const rootReducer = combineReducers({
    caminho: caminhoReducer
})

export default rootReducer;