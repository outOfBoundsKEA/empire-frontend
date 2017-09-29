import * as HttpService from './HttpService'

const namespace = 'statistics'

const movieStatistics = (id, options, cb, errorCb) => {
    HttpService.get(namespace + '/' + id, options, cb, errorCb)
}

export {
    movieStatistics
}
