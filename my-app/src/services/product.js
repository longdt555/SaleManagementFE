import http from './http-common';

const getAll = () => {
    return http.get("/get-all");
};

export default {
    getAll
}