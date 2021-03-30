import http from './http-common';

const GetAll = () => {
    return http.get('/products');
}