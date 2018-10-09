// That's where all the action creators and their reducers live

// Types
export const INIT_UI = '[UI] Init UI';

let INIT_UI_STATE = {
    loading: false
};

const uiReducer = (state = INIT_UI_STATE, action) => {
    if (action.type === INIT_UI) {
        console.log('[UI] Init UI Now!');
        return {...state};
    }
    return state;
}

export default uiReducer;