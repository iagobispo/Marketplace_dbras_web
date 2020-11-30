
import { configureStore } from '@reduxjs/toolkit';

import produdosReducer from './ducks/produts';
import layoutReducer from './ducks/layout';
import cartReducer from './ducks/cart';
import favoriteReducer from './ducks/favorite';

export default configureStore({
    reducer:{
        produtos: produdosReducer,
        layout: layoutReducer,
        cart: cartReducer,
        favorite: favoriteReducer
    }
})
