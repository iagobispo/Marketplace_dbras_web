import React from 'react';

import './styles.css';

export default function ItemCard({item, removeItemCard}){

    return(
   

<div  className="dvpro" >
            <img src = {item.url} alt ="" style={{width: 120}}/>
            <p>{item.nome}</p>
            <button onClick={()=>removeItemCard(item.id)}>Excluir</button>
</div>

)

}