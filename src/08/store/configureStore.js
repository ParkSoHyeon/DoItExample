import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";
import thunk from "redux-thunk";
import notificationEffects from "../middlewares/notificationEffects";

// 미들웨어 동작 sample
import {SET_TRANSACTION_LIST} from "../actions/transactionActions";
import transactionEffects from "../middlewares/transactionEffects";
// const customMiddleware2 = store => nextRunner => action => {
//     console.log('미들웨어2에 전달된 액션 객체', action);
//     console.log('미들웨어2 실행 전', store.getState());
//     const result = nextRunner(action);
//     console.log('미들웨어2 실행 후', store.getState());
//     return result;
// }
//
// const customMiddleware3 = store => nextRunner => action => {
//     console.log('미들웨어3에 전달된 액션 객체', action);
//     console.log('미들웨어3 실행 전', store.getState());
//     const result = nextRunner(action);
//     console.log('미들웨어3 실행 후', store.getState());
//     return result;
// }
//
// const customMiddleware = store => nextRunner => action => {
//     if (action.type === SET_TRANSACTION_LIST) {
//         return nextRunner({
//             ...action,
//             payload: [{
//                 id: 0,
//                 code: 'DOIT',
//                 name: '두잇코인(DOIT)',
//                 totalPrice: 1000000000,
//                 currentPrice: 25000,
//                 datetime: '현재시간',
//             }]
//         })
//     }
//     return nextRunner(action);
// }

export default initState => createStore(
    combineReducers(reducers),
    initState,
    composeWithDevTools(applyMiddleware(thunk, notificationEffects, transactionEffects)),
)