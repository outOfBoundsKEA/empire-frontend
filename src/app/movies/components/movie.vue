<template>
    <div>
        <div class="card-body">
            <img alt="bio poster" style="height: 452px; width: 320px; display: block" :src="movie.imageUrl">

            <p class="card-title">{{ movie.title }}</p>
            <span class="badge badge-primary">Age limit {{ movie.ageLimit }}+</span>
            <br>
            <span class="badge badge-dark">
                            <i class="fa fa-usd" aria-hidden="true"></i>
                            {{ movie.price }}
                        </span>

            <span class="badge badge-success">
                    Total viewing: {{ statistic.totalReservations }}
            </span>

            <p class="card-text">{{ movie.description }}</p>
            <router-link :to="{name: 'Booking'}" class="btn btn-outline-primary">Book</router-link>
        </div>
    </div>
</template>
<script>
    import * as StatisticService from '@/infrastructure/services/StatisticService'

    export default {
        props: {
            movie: {
            }
        },
        data () {
            return {
                statistic: []
            }
        },
        created () {
            this.getMovieStatistics()
        },
        methods: {
            getMovieStatistics () {
                StatisticService.movieStatistics(this.movie.id, {}, (response) => {
                    this.statistic = response.data
                }, () => {
                })
            }
        }
    }
</script>
