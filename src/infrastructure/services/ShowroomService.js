import * as HttpService from './HttpService'

const namespace = 'showrooms'

const find = (id, options, cb, errorCb) => {
    HttpService.get(namespace + '/' + id, options, cb, errorCb)
}

const findAll = (options, cb, errorCb) => {
    HttpService.get(namespace, options, cb, errorCb)
}

export {
    find,
    findAll
}
