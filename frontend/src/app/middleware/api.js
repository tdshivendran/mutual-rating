const apiReducer = ( dispatch ) => next => action => {
    /*
    if (action.type === 'API') {
        const { method, url, onSuccess, onError, label } = action.payload;
            fetch(url, { method })
                .then(response => response.json())
                .then(data => {
                    dispatch(onSuccess(data));
                })
                .catch((e) => {
                    dispatch(onError(e));
                });
    }*/
    return next(action);
}

export default apiReducer;