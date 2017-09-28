import * as HttpService from './HttpService'

const namespace = 'showings'

const find = (id, options, cb, errorCb) => {
    HttpService.get(namespace + '/' + id, options, cb, errorCb)
}

const findAll = (options, cb, errorCb) => {
    HttpService.get(namespace, options, cb, errorCb)
}

const websocket = (id, body, cb, errorCb) => {
    HttpService.put(namespace + '/' + id + '/viewing', body, cb, errorCb)
}

export {
    find,
    findAll,
    websocket
}
