import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';

const rootReducer = combineReducers({
  cartItemCount: cartReducer,
});

export default rootReducer;
