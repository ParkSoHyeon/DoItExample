export const SHOW_NOTIFICATION = 'notification/SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'notification/HIDE_NOTIFICATION';

export function showNotification(message, warning = false) {
    return {
        type: SHOW_NOTIFICATION,
        payload: {
            message,
            warning,
        }
    }
}

export function hideNotification() {
    return {
        type: HIDE_NOTIFICATION,
    }
}