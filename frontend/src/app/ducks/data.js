// That's where all the action creators and their reducers live

export const COUNTER_CHANGE = '[Data] Changed Counter';
export const NEW_LIST_ENTRY = '[Data] Added new list entry';

// Initial state of store.data (see reducers.js)
let INIT_DATA_STATE = {
    numClicks: 5,
    list: []
};

const dataReducer = (state = INIT_DATA_STATE, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            if (!action.payload) return state;
            return {...state, numClicks: state.numClicks + action.payload};
        case NEW_LIST_ENTRY:
            if (!action.payload) return state;
            return {...state, list: [...state.list, action.payload]};
        default:
            return state;
    }
}

export default dataReducer;