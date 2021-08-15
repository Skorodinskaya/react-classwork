let url = 'https://jsonplaceholder.typicode.com/'

const getPosts = () => {
    return fetch(url + 'posts')
        .then(value => value.json())
}

const getComments = (id) => {
    return fetch(url + 'posts/' + id + '/comments')
        .then(value => value.json())
}

export {getPosts, getComments}