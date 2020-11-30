import React from 'react';

import Favorite from '../../component/itemFavoritos'

import {useSelector, useDispatch} from 'react-redux';
import { removeFavorito } from '../../store/ducks/favorite';


export default function Favoritos() {

    const favorite = useSelector(state => state.favorite)
    const dispatch = useDispatch();

    console.log(favorite)

    function removeItemFavoritos(id){
        dispatch(removeFavorito(id));

        console.log(favorite)
    }

    return(
        <div>

            {favorite.length === 0 ?  <p>Não há produtos como favoritos</p> :

            <div>
                  {favorite.map(item => <Favorite key={item.id} item={item} removeItemFavoritos={removeItemFavoritos} /> )}
            </div>

            }

        </div>
    )
}

//key={item._id} item={item} removeItemCard={removeItemCard}
//{cart.map(item => <ItemCard key={item._id} item={item} removeItemCard={removeItemCard} />)}