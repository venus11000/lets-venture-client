import { HIDE_POPUP, SHOW_POPUP } from "./constants"

export function showPopup(data) {
    return {
        type: SHOW_POPUP,
        data
    }
}

export function hidePopup() {
    return {
        type: HIDE_POPUP
    }
}