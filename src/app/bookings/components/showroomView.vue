<template>
    <div>
        <div class="cinema">
            <div style="text-align: center">
                <p class="cinema-name">{{ name }}</p>
                <div class="scene"></div>
            </div>
            <div class="showroom-container" v-bind:style="{width: width * 32 + 'px'}">
                <div v-for="(seat, index) in seatNumbers">
                    <div class="seat-seperator" v-if="(index % width) === 0">
                    </div>

                    <div class="showroom-seat"
                         :class="{ 'seat-available': !isReserved(seat), 'seat-taken' : isReserved(seat) }"
                         @click="reserveSeat(seat)">
                        <p class="text-center">{{ seat }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .seat-seperator {
        padding: 25px 0;
        display: block;
    }
    .seat-available {
        background-image: url(/static/assets/seat-available.svg);
    }
    .seat-available:hover {
        background-image: url(/static/assets/seat.svg);
    }
    .seat-taken {
        background-image: url(/static/assets/seat-taken.svg);
    }
    .cinema-name {
        font-size: 24px;
        color: #2c3e50;
    }
    .cinema {
        border: 1px solid #2c3e50;
        padding: 25px;
    }
    .showroom-container {
        overflow: hidden;
        margin: auto;
    }
    .scene {
        height: 25px;
        background-color: #2c3e50;
        border-top-left-radius:60%;
        border-top-right-radius:60%;
        margin: 20px;
    }
    .showroom-seat {
        width: 30px;
        height: 30px;
        margin-right: 2px;
        background-size: 28px 28px;
        background-repeat: no-repeat;
        float: left;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        outline: none !important;
        & p {
            font-size: 12px;
            font-family: 'Righteous', cursive;
        }
    }
</style>
<script>
    import Pusher from 'pusher-js'

    export default {
        name: 'showroomView',
        props: {
            reservedSeats: {
                type: Array
            },
            id: {
            },
            width: {
                type: Number
            },
            height: {
                type: Number
            },
            name: {
                type: String,
                default: 'Room one'
            }
        },
        created () {
            this.listenForWebsocket()
        },
        methods: {
            listenForWebsocket () {
                const pusher = new Pusher('bff122a064b3e4fa9ae3', {
                    cluster: 'eu',
                    encrypted: true
                })
                const channel = pusher.subscribe('showing_reservations')
                channel.bind(this.id, (data) => {
                    const json = JSON.parse(data)
                    const seatNumber = json.seatNumber

                    if (!this.isReserved(seatNumber)) {
                        this.reservedSeats.push(seatNumber)
                    }
                })
            },
            reserveSeat (j) {
                if (!this.isReserved(j)) {
                    this.reservedSeats.push(j)
                    this.$emit('seatReserved', this.reservedSeats)
                    this.$emit('addSeatReservation', j)
                    return
                }
                // Remove if clicked double
                this.$emit('removeSeatReservation', j)
                const index = this.reservedSeats.indexOf(j)
                this.reservedSeats.splice(index, 1)
            },
            isReserved (i) {
                return this.reservedSeats.indexOf(i) !== -1
            }
        },
        computed: {
            seatNumbers () {
                return this.width * this.height
            }
        }
    }
</script>
