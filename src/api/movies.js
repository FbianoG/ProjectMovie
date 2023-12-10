
async function getPopular() {
    const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=04e7016b02b7bbb881282e73c4c81bf1&language=pt-BR&page=${1}`)
    const data = await api.json()
    return data.results
}

async function getTop() {
    const apiTop = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=04e7016b02b7bbb881282e73c4c81bf1&language=pt-BR&page=${1}`)
    const topData = await apiTop.json()
    return topData.results
}

async function getUpcoming() {
    const apiTop = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=04e7016b02b7bbb881282e73c4c81bf1&language=pt-BR&page=${1}`)
    const topData = await apiTop.json()
    return topData.results
}

async function getDetails(e) {
    const api = await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=04e7016b02b7bbb881282e73c4c81bf1&language=pt-BR`)
    const data = await api.json()
    return data
}

async function getImages(e) {
    const api = await fetch(`https://api.themoviedb.org/3/collection/${e}/images?api_key=04e7016b02b7bbb881282e73c4c81bf1`)
    const data = await api.json()
    return data
}

async function searchMovie(e) {
    const api = await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&include_adult=true&language=pt-BR&api_key=04e7016b02b7bbb881282e73c4c81bf1`)
    const data = await api.json()
    return data
}



module.exports = {
    getPopular,
    getTop,
    getUpcoming,
    getDetails,
    getImages,
    searchMovie,
}


