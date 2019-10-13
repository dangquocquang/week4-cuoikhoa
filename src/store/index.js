import { createStore } from 'redux';
import shopApp from '../reducers';

const store = createStore(
  shopApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
