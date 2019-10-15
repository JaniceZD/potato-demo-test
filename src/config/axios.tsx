import axios from "axios"

const appID = '7wfWsfscoq44dWM2dCcQmdV8'
const appSecret = 'x8jE2TC8GmbbZ7Hwb8W6vNGw'

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
  // Do something before request is sent
  const xToken = localStorage.getItem('x-token')

  if (xToken) {
    config.headers['Authorization'] = `Bears ${xToken}`
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (response.headers['x-token']) {
    localStorage.setItem('x-token', response.headers['x-token'])
  }
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance;