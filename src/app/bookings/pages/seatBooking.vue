<template>
    <div class="top-section" v-if="showing">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <showroom-view v-if="cinemaView"
                                   :width="showing.showroom.width"
                                   :height="showing.showroom.height"
                                   :name="showing.showroom.name"
                                   :reservedSeats="reservedSeats"
                                   :currentOrder="currentOrder"
                                   :id="showing.id"
                                   @seatReserved="otherReserved($event)"
                                   @addSeatReservation="addToCurrentOrder($event)"
                                   @removeSeatReservation="removeFromCurrentOrder($event)"></showroom-view>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Current order</h4>
                            <p>{{showing.movie.title}}</p>
                            <h6 class="card-subtitle mb-2 text-muted">{{showing.datetime | moment("Do MMMM HH:mm")}}</h6>
                            <hr>
                            <p>Number of seats to reserve {{ currentOrder.length }}</p>

                            <div class="order-scroll">
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Seat Number</th>
                                        <th>Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="seatNumber in currentOrder">
                                        <td>{{ seatNumber }}</td>
                                        <td>{{ showing.movie.price }}$</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <hr>
                            <b>Total cost: {{currentOrder.length * showing.movie.price}}$</b>

                            <hr>

                            <div class="collapse" style="display: block;">
                                <div class="card card-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Customers phone number</label>
                                        <input v-model="form.phone" type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number">
                                        <small id="emailHelp" class="form-text text-muted">This will be stored in our registration db</small>
                                    </div>
                                </div>
                                <button class="btn btn-success" @click="submitBuy()">Buy tickets</button>
                                <button class="btn btn-danger" @click="cancelOrder()">Cancel order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .card-text {
        font-size: 24px;
    }
    .card {
        width: 100%;
        text-align: center;
    }
    .order-scroll {
        overflow-y: scroll;
        max-height: 200px;
    }
</style>
<script>
    import showroomView from '../components/showroomView.vue'
    import * as showingService from '@/infrastructure/services/ShowingService'
    import * as reservationService from '@/infrastructure/services/ReservationService'

    export default {
        name: 'BookingView',
        data () {
            return {
                showing: false,
                cinemaView: false,
                form: {
                    phone: '',
                    name: '',
                    showingId: this.$route.params.id,
                    seats: []
                },
                reservedSeats: [],
                currentOrder: []
            }
        },
        created () {
            this.getShowing()
            this.getReservations()
        },
        methods: {
            submitBuy () {
                let body = {
                    phone: this.form.phone,
                    name: this.form.name,
                    showingId: parseInt(this.form.showingId),
                    seat: this.currentOrder
                }
                    reservationService.create(body, () => {
                        this.$toastr('success', 'Tickets bought', 'You may procced mr. shop assistent')
                        this.$router.push({name: 'Movies'})
                    })
            },
            cancelOrder () {
                for (let i = 0; i < this.currentOrder.length; i++) {
                    showingService.websocket(this.showing.id, {seatNumber: this.currentOrder[i]}, () => {
                    })
                }
                this.currentOrder = []
            },
            getReservations () {
                reservationService.showingReservations(this.$route.params.id, {}, (response) => {
                    const reservations = response.data
                    for (let i = 0; i < reservations.length; i++) {
                        this.reservedSeats.push(reservations[i].seat)
                    }
                })
            },
            otherReserved (seatNumber) {
                if (!this.isReserved(seatNumber)) {
                    this.reservedSeats.push(seatNumber)
                    return
                }
                const index = this.reservedSeats.indexOf(seatNumber)
                this.reservedSeats.splice(index, 1)
            },
            isReserved (i) {
                return this.reservedSeats.indexOf(i) !== -1
            },
            addToCurrentOrder (seatNumber) {
                this.currentOrder.push(seatNumber)
                showingService.websocket(this.showing.id, {seatNumber: seatNumber}, (response) => {
                })
            },
            removeFromCurrentOrder (seatNumber) {
                const index = this.currentOrder.indexOf(seatNumber)
                this.currentOrder.splice(index, 1)
                showingService.websocket(this.showing.id, {seatNumber: seatNumber}, (response) => {
                })
            },
            getShowing () {
                showingService.find(this.$route.params.id, {}, (response) => {
                    this.showing = response.data
                    this.cinemaView = true
                }, (error) => {
                    console.log(error)
                })
            }
        },
        components: {
            showroomView
        }
    }
</script>
