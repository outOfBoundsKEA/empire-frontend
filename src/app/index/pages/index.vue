<template>
    <div>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Empire movie theather</h1>
                <p class="lead text-muted">Empire strives to be the best theater in the world. With our advanced movie theater software
                we make it a joy to buy tickets</p>
                <p>
                    <a href="#" class="btn btn-outline-light">Buy tickets</a>
                    <router-link :to="{name: 'Movies'}" class="btn btn-secondary">
                        See movies
                    </router-link>
                </p>
            </div>
        </section>
        <movie-list></movie-list>
    </div>
</template>
<style>
    .jumbotron-heading {
        font-family: 'Righteous', cursive;
        color: #fff;
    }
    .lead {
        color: #bdc3c7;
    }
    .btn-outline-light:hover {
        color: #2c3e50;
    }
</style>
<script>
    import movieList from '@/app/movies/components/movieList'
    export default {
        name: 'Index',
        components: {
            movieList
        }
    }
</script>
