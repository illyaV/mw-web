import client from './client'

const posts = {
    get(id) {
        return client.get(`posts/${id}`)
    },

    getList() {
        return client.get('posts')
    },

    update(id, updates) {
        return client.put(`posts/${id}`, updates)
    },

    delete(id) {
        return client.delete(`posts/${id}`)
    }
};

export default posts