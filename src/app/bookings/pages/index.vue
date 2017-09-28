<template>
    <div class="top-section">
        <div class="container">
            <div class="showing-container">
                <div class="row">
                        <div class="card col-md-3" v-for="showing in contents">
                            <div class="card-title">
                                <p>
                                    <b>{{ showing.showroom.name }}</b> - {{ showing.datetime | moment("Do MMMM HH:mm") }}
                                </p>
                            </div>

                            <img class="card-img-top" :src="showing.movie.imageUrl" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title">{{ showing.movie.title }}</h4>
                                <span class="badge badge-primary">Age limit: {{ showing.movie.ageLimit }}</span>
                                <span class="badge badge-secondary">Price: {{ showing.movie.price }} $</span>
                                <span class="badge badge-dark">{{ showing.movie.category }}</span>
                                <br>
                                <br>
                                <router-link :to="{ name: 'SeatBooking', params: { id: showing.id } }" class="btn btn-primary">Book</router-link>
                                <button class="btn btn-danger">Slet</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .showing-container {
        margin: 0 auto;
        text-align: center;
    }
    .card {
        padding: 10px;
        min-height: 610px;
        border-right: 1px solid #2c3e50;
    }
    .card-title {
        font-size: 16px;
    }
    .elipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 10rem;
    }
</style>
<script>
    import * as showingService from '@/infrastructure/services/ShowingService'
    export default {
        data () {
          return {
              contents: []
          }
        },
        created () {
            this.getShowings()
        },
        methods: {
            getShowings () {
                showingService.findAll({}, (response) => {
                    this.contents = response.data
                }, (error) => {
                    console.log(error)
                })
            }
        }
    }
</script>
