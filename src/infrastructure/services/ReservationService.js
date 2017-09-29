import * as HttpService from './HttpService'

const namespace = 'reservations'

const find = (id, options, cb, errorCb) => {
    HttpService.get(namespace + '/' + id, options, cb, errorCb)
}

const findAll = (options, cb, errorCb) => {
    HttpService.get(namespace, options, cb, errorCb)
}

const create = (body, cb, errorCb) => {
    HttpService.post(namespace, body, cb, errorCb)
}

const showingReservations = (id, options, cb, errorCb) => {
    HttpService.get(namespace + '/showings/' + id, options, cb, errorCb)
}

export {
    find,
    findAll,
    create,
    showingReservations
}
