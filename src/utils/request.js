function request(url, options = {}) {
    if (options.body && options.headers['Content-Type'] === 'application/json') {
        options.body = JSON.stringify(options.body)
    }

    return fetch(url, options)
        .then(checkStatus)
        .then(parseResponse)
}

function checkStatus(res) {
    return res.ok
        ? res
        : Promise.reject(new Error(res))
}

function parseResponse(res) {
    if (res.status === 404) {
        return Promise.resolve(null)
    }

    return res.clone().json().catch(() => res.text())
}

export default request