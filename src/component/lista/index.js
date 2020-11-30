import React from 'react';

import './styles.css';

import imgCor from '../../assets/coracao.png';
import imgCar from '../../assets/car.png';



export default function List({pro, addItemCart, addItemFavorito}){

    return(

        <div className='dvProdutos'>
            
            <button className='buttonImage'>
                <img src={pro.url} className='imagg'  alt=""/>
            </button>

            <p>{pro.nome}</p>
            <p>{pro.preco}</p>

            <div className='dvBtnProduto'>
                <button className='btnCompra'>COMPRAR</button>
                <button className='btnFavorito'><img src={imgCor} className='imgP2'  alt="" onClick={() => addItemFavorito(pro)}/></button>
                <button className='btnCar'><img src={imgCar} className='imgP2'  alt="" onClick={() => addItemCart(pro)}/></button>
            </div>
         </div> 
       
    )

}

/*
 

        */