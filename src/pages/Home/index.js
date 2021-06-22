import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import List from '../../component/lista'; 
import { getAllProdutos } from '../../store/fetchAction';

import  {addItem} from '../../store/ducks/cart';//importando variavel // const addItem = createAction('ADD_ITEM')
import  {addFavorito} from '../../store/ducks/favorite';//importando variavel // const addFavorito = createAction('ADD_FAVORITO');

import './styles.css';

import Fogo from '../../assets/fogo.png';
import pesquisa from '../../assets/search.png';
import imgCor from '../../assets/coracao.png';
import imgCar from '../../assets/car.png';
import imglarga from '../../assets/img1400.png';

import { Link } from 'react-router-dom';

export default function Home(){
    
    const length = useSelector(state => state.cart.length);
    const lengthf = useSelector(state => state.favorite.length);

   const cart = useSelector(state => state.cart)
   const favorite = useSelector(state => state.favorite)

    const produtos = useSelector(state => state.produtos);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProdutos())
    }, [dispatch]);

    
    function addItemCart(produto){  // função para adicionar um produto ao carrinho 
       if (cart.some((prod) => prod.id === produto.id)) {  //condição para verificar se o produto que esta sendo adicionado ja esta no carrinho
           alert('O PRODUTO JS FOI ADICIONADO AO CARRINHO')  // aviso de que o produto ja esta no carrinho
       }else{
            dispatch(addItem(produto));  //caso a condição seja else, esse comando ira adicionar o produto no carrinho
       }
    }

    function addItemFavorito(produto){
       if (favorite.some((prod) => prod.id === produto.id)){
           alert('O PRODUTO JA ESTA AOS FAVORITOS')
       }else{
            dispatch(addFavorito(produto));
       }
        
    }
    
    
return (
    
         <div className='containerGeral'>           
                 <div className='bordaSimples'>
                 </div>

                 <div className='dvBusca'>
                     <img src={Fogo} className='imgLogo'  alt=""/>
                     <div className='dvInput'>
                     <input placeholder='Pesquisar' ></input>
                     <button className='btInput'><img src={pesquisa} className='imgP'  alt=""/></button>
                     </div>
                   
                     <button className='btEntrar' onClick={() => {console.log(produtos)}}>ENTRAR</button>

                    <div>
                         <Link to='/favorite'> <img src={imgCor} className='imgP2'  alt=""/></Link>
                         <span>{lengthf}</span>
                    </div>
                     
                     <div>
                     <Link to='/carrinho'> <img src={imgCar} className='imgP2' alt=""/></Link>
                         <span className="">{length}</span>
                     </div>

                     <Link to='/add'>ADICIONAR PRODUTOS</Link>
                 </div>
                 <div className='divGenero'>
                     <button className='btnGenero'>MASCULINO</button>
                     <button className='btnGenero'>FEMININO</button>
                     <button className='btnGenero'>INFANTIL</button>
                     
                 </div>
        <div className='dvList'>
        <img src={imglarga} className='imgLarga'  alt=""></img>
            <div className='dvList2'>

               {produtos.map((pro, index)=> <List key={index} pro={pro} addItemCart={addItemCart} addItemFavorito={addItemFavorito}/>)} 
           </div>
         </div>      
        </div>
         
)}

