/**
 * Reducer to manage state on type of action
 * @param {*} state 
 * @param {*} action 
 */
export const rootReducer = function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "SET_PayLoadData": {
            return {
                ...state,
                payloadData: payload.payloadData
            }
        }
        case "SET_HistoryData": {
            return {
                ...state,
                historyData: payload.historyData
            }
        }
        case "SET_Loading": {
            return {
                ...state,
                isLoading: payload.setLoading
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
};

/**
 * Initial state
 */
const initialState = {
    historyData: [],
    payloadData: [],
    isLoading: true
};
