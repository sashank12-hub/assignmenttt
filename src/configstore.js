import {createStore} from 'redux';
import {productreducer} from './reducer/productreducer';

export const configstore=()=>{
    const store=createStore(productreducer);
    return store;
}
