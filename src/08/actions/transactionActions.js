import Api from "../Api";

export const LOADING_TRANSACTION_LIST = 'transaction/LOADING_TRANSACTION_LIST';
export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

export function setTransactionList(transactions) {
    return {
        type: SET_TRANSACTION_LIST,
        payload: transactions
    };
}

export function loading() {
    return {
        type: LOADING_TRANSACTION_LIST,
    }
}

export function requestTransactionList(params) {
    return (dispatch) => {
        dispatch(loading());
        Api.get('/transactions', { params })
            .then(({ data }) => dispatch(setTransactionList(data)));
    }
}

