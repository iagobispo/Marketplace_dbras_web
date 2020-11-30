import {createAction, createReducer} from '@reduxjs/toolkit'

const INITIAL_STATE = [];

export const addFavorito = createAction('ADD_FAVORITO');
export const removeFavorito = createAction('REMOVE_FAVORITO');

export default createReducer(INITIAL_STATE, {
    [addFavorito.type]: (state, action) => [...state, action.payload],
    [removeFavorito.type]: (state, action) => state.filter((item) => item.id !== action.payload)
});