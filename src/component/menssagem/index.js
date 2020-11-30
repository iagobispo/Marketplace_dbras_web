import React from 'react';

import { useSelector } from 'react-redux';

import './styles.css';


export default function Msg(){

    const isShow = useSelector((state) => state.layout.showMessage);

    console.log()

    return(
        <React.Fragment>
            {isShow && (
                <div className='dvmsg'>
                    <p>O PRODUTO FOI ADICIONADO COM SUCESSO!!!</p>
                </div>
            )}
        </React.Fragment>
    );
}