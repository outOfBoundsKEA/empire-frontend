<template>
    <div>
        <top-menu></top-menu>
        <router-view></router-view>
        <bottom-footer></bottom-footer>
    </div>
</template>
<script>
    import topMenu from './menu'
    import bottomFooter from './footer.vue'
    export default {
        components: {
            topMenu,
            bottomFooter
        }
    }
</script>
