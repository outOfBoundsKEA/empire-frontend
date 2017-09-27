<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
        <router-link :to="{name: 'Movies'}" class="navbar-brand">Empire</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav justify-content-end ml-auto">
                <li class="nav-item">
                    <router-link :to="{name: 'Movies'}" class="nav-link">
                        <i class="fa fa-film" aria-hidden="true"></i> movies</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'Cinema'}" class="nav-link">
                        <i class="fa fa-video-camera" aria-hidden="true"></i> cinema
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'Booking'}" class="nav-link">
                        <i class="fa fa-ticket" aria-hidden="true"></i> booking
                    </router-link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>
<style lang="scss">
    .router-link-active {
        color: white !important;
    }
    .navbar-brand {
        font-family: 'Righteous', cursive;
    }
    .nav-item {
        text-transform: capitalize;
    }
    .navbar {
        padding: 10px;
        font-size: 16px;
    }
    .bg-dark{
        background-color: #2c3e50 !important;
    }
</style>
