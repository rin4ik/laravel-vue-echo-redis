<template>
    <div class="container">
        <div class="header-text hidden-xs">
            <div class="col-md-12 text-center">
                <h2>
                    <span>Hi, Guest!</span>
                </h2>
                <button class="btn btn-primary" @click="sendEvent">Send Event</button>
                <br> 
                <br>
                <div class="alert alert-primary" role="alert" v-for="(event,index) in events" :key="index">
                    Echo event {{event.time}}
                </div>
            </div>
        </div>
    </div>
</template>
<script> 
    import axios from 'axios'
    export default {
        name: 'Home',
        data(){
            return {
                events: []
            }
        },
        methods:{
            sendEvent(){
                axios.post('http://localhost:8000/api/order-updated')
            }
        },
        mounted(){ 
            this.$echo.channel('orders')
            .listen('.order.updated', (e) => {
                this.events.unshift(e)
            });
        }
    }
</script>
<style scoped>
    /* Carousel Header Styles */
    .header-text {
        position: absolute;
        top: 30%;
        left: 1.8%;
        right: auto;
        width: 96.66666666666666%;
        color: #fff;
    }

    .header-text h2 {
        font-size: 40px;
        font-weight: bold;
    }

    .header-text h2 span {
        padding: 10px;
        color: #211f1f;
    }

    .btn-min-block {
        min-width: 170px;
        line-height: 26px;
    }

    .btn-theme {
        color: #211f1f;
        background-color: transparent;
        border-color: #211f1f;
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        border-radius: 0px;
    }

    .btn-theme:hover {
        color: #fff;
        background-color: #211f1f;
        border-color: #211f1f;
    }
</style>
