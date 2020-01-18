import request from '../utils/request'

const SERVER_URL = 'http://localhost:3001/';
const methods = ['get', 'post', 'put', 'delete'];

const defaultHeaders = {
    'Content-Type': 'application/json'
};

const composeHeaders = headers => ({
    ...defaultHeaders,
    ...headers
});

const createMethod = method => async function (path, body, headers) {
    const url = SERVER_URL + path;

    headers = composeHeaders(headers);
    method = method.toUpperCase();

    return request(url, {
        headers,
        method,
        body,
    })
};

const client = {};

methods.forEach(method => client[method] = createMethod(method));

export default client
