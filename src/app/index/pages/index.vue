<template>
    <div>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Empire movie theather</h1>
                <p class="lead text-muted">Empire strives to be the best theater in the world. With our advanced movie theater software
                we make it a joy to buy tickets</p>
                <p>
                    <a href="#" class="btn btn-primary">Buy tickets</a>
                    <a href="#" class="btn btn-secondary">See movies</a>
                </p>
            </div>
        </section>
        <movie-list></movie-list>
    </div>
</template>
<script>
    import movieList from '@/app/movies/components/movieList'
    export default {
        name: 'Index',
        components: {
            movieList
        }
    }
</script>
