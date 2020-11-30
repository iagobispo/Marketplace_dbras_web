import React from 'react';

export default function itemFavoritos({item, removeItemFavoritos}){
    return(
   

        <div  className="dvpro" >
                    <img src = {item.url} alt ="" style={{width: 120}}/>
                    <p>{item.nome}</p>
                    <button onClick={()=>removeItemFavoritos(item.id)}>Excluir</button>
        </div>
        
        )
}