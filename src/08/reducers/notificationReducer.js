import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../actions/notificationActions';

const initState = {
    message: '',
    warning: false,
    showMessage: false,
}

export default (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_NOTIFICATION: {
            const { message, warning } = payload;

            return {
                ...state,
                message,
                warning,
                showMessage: true,
            }
        }
        case HIDE_NOTIFICATION: {
            return {
                ...state,
                message: '',
                showMessage: false,
            }
        }
        default:
            return state;
    }
}