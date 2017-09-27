<template>
    <div class="album text-muted">
        <div class="container">

            <div class="row">
                <div class="card" v-for="movie in movies">
                    <div class="card-body">
                        <img alt="bio poster" style="height: 452px; width: 320px; display: block" :src="movie.imageUrl">

                        <p class="card-title">{{ movie.title }}</p>
                        <span class="badge badge-primary">Age limit {{ movie.ageLimit }}+</span>
                        <br>
                        <span class="badge badge-dark">
                            <i class="fa fa-usd" aria-hidden="true"></i>
                            {{ movie.price }}
                        </span>
                        <p class="card-text">{{ movie.description }}</p>
                        <button class="btn btn-outline-primary">Book</button>
                        <button class="btn btn-outline-primary">Details</button>
                    </div>
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
        }
    }
</script>
