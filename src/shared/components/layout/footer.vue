<template>
    <footer class="text-muted">
        <div class="container">
            <p class="float-right">
                <select v-model="$i18n.locale" class="form-control">
                    <option v-for="(locale, index) in locales">{{index}}</option>
                </select>
            </p>
            <p>Empire theater © OutOfBounds, This is EMPIRE!</p>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'Footer',
        data () {
            return {
                locales: this.$i18n.messages
            }
        }
    }
</script>
