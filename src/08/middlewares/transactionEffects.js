import {
    TRADE_COMPLETE,
    requestTransactionList
} from "../actions/transactionActions";
import { showNotification } from "../actions/notificationActions";

export default store => nextRunner => action => {
    const { type, payload } = action;
    const result = nextRunner(action);

    if (type === TRADE_COMPLETE) {
        const message = '거래 목록을 최신 정보로 업데이트하였습니다.';
        store.dispatch(showNotification(message));
        store.dispatch(requestTransactionList());
    }

    return result;
}