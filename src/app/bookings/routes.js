import seatBooking from './pages/seatBooking'
import index from './pages/index'

const routes = [
    {
    path: '/bookings/:id',
    name: 'SeatBooking',
    component: seatBooking
    },
    {
        path: '/bookings',
        name: 'Booking',
        component: index
    }
]

export default routes
