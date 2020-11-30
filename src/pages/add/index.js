import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { hideMessage, showMessage } from '../../store/ducks/layout';

import { addProdutoFetch } from '../../store/fetchAction';


import './styles.css';

export default function Add() {



    const [form, setForm] = useState({ nome: '', url: '', preco: '', imagem: '' });
    const dispatch = useDispatch();

    function formChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    function Envia(e) {
        e.preventDefault();

        dispatch(addProdutoFetch(form))

        setForm({ nome: '', url: '', preco: '' });

        dispatch(showMessage());

        setTimeout(() => { dispatch(hideMessage()) }, 1000)


    }

    return (

        <div className='dvcontainerGeral'>

            <form onSubmit={Envia}>
                <h1>adicione um novo produto</h1>

                <input onChange={formChange} required placeholder='informe o nome do produto' name='nome' value={form.nome} ></input>

                <input onChange={formChange} required placeholder='informe o endereço da imagem (url)' name='url' value={form.url} />

                <input onChange={formChange} required type='file' name='imagem' value={form.imagem} />

                <input onChange={formChange} required placeholder='informe o preço em reais' name="preco" type='number' value={form.preco} />

                <button type="submit">Salver</button>
            </form>

        </div>
    )
}

//value={nome} onChange={e => setNome(e.target.value)}

