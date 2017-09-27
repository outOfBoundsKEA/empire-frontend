<template>
    <div class="top-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="jumbotron">
                        <h2 class="display-3">Guide</h2>
                        <p class="lead">This shows how you use this function.. Its simply to easy to understand. But this is how it goes</p>
                        <hr class="my-4">
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12" v-for="cinema in contents">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">{{ cinema.name }}</h4>
                                    <p class="card-text">Sæder
                                        <span class="badge badge-secondary">
                                    {{ cinema.height * cinema.width}}
                                </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as showingService from '@/infrastructure/services/ShowroomService'
    export default {
        data () {
          return {
              contents: []
          }
        },
        created () {
            this.getCinema()
        },
        methods: {
            getCinema () {
                showingService.findAll({}, (response) => {
                    this.contents = response.data
                }, (error) => {
                    console.log(error.response)
                })
            }
        }
    }
</script>
<style scoped>
    .top-section {
        min-height: 70vh;
    }
    .jumbotron {
        background-color: #f7f7f7;
    }
    .clearfix {
        margin-top: 20px;
    }
    .big-icon {
        font-size: 150px;
    }
</style>
