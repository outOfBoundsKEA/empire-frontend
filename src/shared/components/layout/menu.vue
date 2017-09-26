<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
        <router-link :to="{name: 'Index'}" class="navbar-brand">Empire</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav justify-content-end">
                <li class="nav-item active">
                    <router-link :to="{name: 'Movies'}" class="nav-link">movies</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">cinema</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">booking</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>
