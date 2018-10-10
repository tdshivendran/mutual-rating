// That's where all the Types definitions and their reducers live

// Types
export const INIT_UI = '[UI] Init UI';
export const UI_WARNING = '[UI] Display UI warning';

// Initial state of store.ui (see reducers.js)
let INIT_UI_STATE = {
    loading: false
};

const uiReducer = (state = INIT_UI_STATE, action) => {
    switch (action.type) {
        case INIT_UI:
            console.log('[UI] Init UI Now!');
            return {...state};
        case UI_WARNING:
            console.log('[UI] Display UI warning NOW!');
            return {...state};
        default:
            return state;
    }
}

export default uiReducer;