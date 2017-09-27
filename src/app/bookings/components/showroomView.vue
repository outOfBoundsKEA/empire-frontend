<template>
    <div>
        <div class="cinema">
            <div style="text-align: center">
                <p class="cinema-name">{{ name }}</p>
                <div class="scene"></div>
            </div>
            <div class="showroom-container" v-bind:style="{width: width * 45 + 'px'}">
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
        padding: 30px 0;
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
        width: 40px;
        height: 40px;
        margin-right: 5px;
        background-size: 38px 38px;
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
    export default {
        name: 'showroomView',
        data () {
            return {
                reservedSeats: []
            }
        },
        props: {
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
        methods: {
            reserveSeat (j) {
                if (!this.isReserved(j)) {
                    this.reservedSeats.push(j)
                    this.$emit('seatReserved', this.reservedSeats)
                    return
                }
                // Remove if clicked double
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
