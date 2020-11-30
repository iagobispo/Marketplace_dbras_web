import api from '../../services/api';
import {addprodutos, addproduto} from '../ducks/produts';

export const getAllProdutos = () => {
    return (dispatch) => {
        api.get('/produtos')
        .then((res) => {
            dispatch(addprodutos(res.data.produtos));
        })
        .catch(console.log);
    };
};

export const addProdutoFetch = produto => {
    return dispatch => {
        api
            .post('/produtos', produto)
                .then(res =>{dispatch(addproduto(res.data))})
                    .catch(console.log)
             
    }
}
