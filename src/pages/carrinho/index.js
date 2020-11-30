import React from 'react'; 

import ItemCard from '../../component/itemCard';

import './styles.css';

import {useSelector, useDispatch} from 'react-redux';
import {removeItem} from '../../store/ducks/cart';

import {Link} from 'react-router-dom';



export default function Carrinho(){

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    function removeItemCard(id){
        dispatch(removeItem(id));

    }
    return (
        <div className="dv">
            <Link to='/'>voltar para home</Link>
            {cart.length === 0 ?<p>SEM PRODUTOS NO CARRINHO...</p> : 

            <div className="fragment">
                <div className="dvprodutos">
                {cart.map(item => <ItemCard key={item._id} item={item} removeItemCard={removeItemCard} />)}

                </div>

            </div>
            }
        </div>
    )
};

