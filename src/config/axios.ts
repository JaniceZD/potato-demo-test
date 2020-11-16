import axios from "axios"
import history from './history'

const appID = '7wfWsfscoq44dWM2dCcQmdV8';
const appSecret = 'x8jE2TC8GmbbZ7Hwb8W6vNGw';
let n = 0;
const instance = axios.create({
    baseURL: 'https://gp-server.hunger-valley.com/',
    //timeout: 1000,
    headers: {
        't-app-id': appID,
        't-app-secret': appSecret
    }
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const xToken = localStorage.getItem('x-token')

    if (xToken) {
        config.headers['Authorization'] = `Bears ${xToken}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    if (response.headers['x-token']) {
        localStorage.setItem('x-token', response.headers['x-token'])
        localStorage.setItem("count", n.toString())
        if (!n) {
            n = 1
        } else {
            n += 1
        }
    }
    if (!localStorage.getItem("timer")) {
        localStorage.setItem("timer", "25")
    }
    return response;
}, function (error) {
    if (error.response === undefined || error.response.status === 401) {
        if (history.location.pathname === '/') {
            history.push('/login')
        }
    }
    return Promise.reject(error);
});

export default instance;