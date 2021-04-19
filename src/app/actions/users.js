import { userContants } from './contants';
import axios from './axios';

export const signup = (user) => {
    return async dispatch => {
        dispatch({ type: userContants.USER_SIGN_UP_REQUEST });
        console.log('before post');
        try {
            const res = await axios.post('/user/signup', user);
            console.log('after post');
            console.log(res.data);
            if (res.status === 201) {
                const { user } = res.data;
                console.log(user);
                dispatch({
                    type: userContants.USER_SIGN_UP_SUCCESS,
                    payload: { user }
                })
            } else {
                dispatch({
                    type: userContants.USER_SIGN_UP_FAILURE,
                    payload: { error: res.data.errors }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const login = (user) => {
    return async dispatch => {
        dispatch({ type: userContants.USER_LOG_IN_REQUEST });
        console.log('before post');
        try {
            const res = await axios.post('/user/login', user);
            console.log('after post');
            console.log(res.data);
            if (res.status === 200) {
                const { user, token } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: userContants.USER_LOG_IN_SUCCESS,
                    payload: { user, token }
                })
            } else {
                dispatch({
                    type: userContants.USER_LOG_IN_FAILURE,
                    payload: { error: res.data.errors }
                })
            }
        } catch (error) {
            dispatch({
                type: userContants.USER_LOG_IN_FAILURE,
                payload: { error: error.response.data.errors }
            })
        }
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(window.localStorage.getItem('user'));
            dispatch({
                type: userContants.USER_LOG_IN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }
        else {
            dispatch({
                type: userContants.USER_LOG_IN_FAILURE,
                payload: {
                    error: "Login to do some actions"
                }
            });
        }
    }
}

export const logout = () => {
    return async dispatch => {
        dispatch({ type: userContants.USER_LOG_OUT_REQUEST });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch({ type: userContants.USER_LOG_OUT_SUCCESS });
    }
}

