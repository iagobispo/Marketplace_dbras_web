

import { createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addproduto = createAction('ADD_PRODUTO');
export const addprodutos  = createAction('ADD_PRODUTOS')

export default createReducer(INITIAL_STATE,{
    [addproduto.type]: (state, action) => [...state, action.payload],
    [addprodutos.type]: (state, action) => [...action.payload]
});

