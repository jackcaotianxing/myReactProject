import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import redusers from './redusers';
let store ;
if(process.env.NODE_ENV === 'development'){
    store = createStore(redusers,composeWithDevTools(applyMiddleware(thunk)));
}else {
    store = createStore(redusers,applyMiddleware(thunk));
}
export default store
