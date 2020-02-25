import { createStore } from 'redux';

import rootReducer from './mudules/rootReducer';

const store = createStore(rootReducer);

export default store;