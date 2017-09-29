<template>
    <div class="album text-muted">
        <div class="container">

            <div class="row">
                <div class="card" v-for="movie in movies">
                    <movie :movie="movie"></movie>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
    .card-body {
        background-color: #ecf0f1;
    }
    .card-title {
        text-transform: uppercase;
        color: #2c3e50;
        font-size: 20px;
        padding-top: 5px;
    }
</style>
<script>
    import * as movieService from '@/infrastructure/services/MovieService'
    import movie from './movie'

    export default {
        name: 'MovieList',
        data () {
            return {
                movies: []
            }
        },
        created () {
            this.getMovies()
        },
        methods: {
            getMovies () {
                movieService.findAll({}, (response) => {
                    this.movies = response.data
                }, (error) => {
                    console.log(error)
                })
            }
        },
        components: {
            movie
        }
    }
</script>
