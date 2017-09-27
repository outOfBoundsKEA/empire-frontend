<template>
    <div class="top-section">
        <div class="container">
            <h4 class="text-center text-uppercase">Pirates of the caribien</h4>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Seats available </h4>
                            <p class="card-text"><span class="badge badge-success">{{ cinema.seats - reservedSeats.length}}</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Seats taken </h4>
                            <p class="card-text"><span class="badge badge-danger">{{ reservedSeats.length }}</span></p>
                        </div>
                    </div>
                </div>

            </div>
            <showroom-view :width="cinema.width"
                           :height="cinema.height"
                           :name="cinema.name"
                           @seatReserved="reservedSeatsUpdated($event)"></showroom-view>
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
</style>
<script>
    import showroomView from '../components/showroomView.vue'
    export default {
        name: 'BookingView',
        data () {
            return {
                cinema: {
                    width: 20,
                    height: 12,
                    name: 'Cinema one',
                    seats: 240
                },
                reservedSeats: []
            }
        },
        methods: {
            reservedSeatsUpdated (data) {
                this.reservedSeats = data
            }
        },
        components: {
            showroomView
        }
    }
</script>
