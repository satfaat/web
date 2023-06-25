<template>
    <div v-on:click="toggleFavorite">
        <h2>
            {{ foodName }}
            <img src="/img_quality.svg" v-show="foodIsFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <button v-on:click="toggleFavorite">Favorite</button>
    </div>
</template>

<script>
export default {
    props: {
        foodName: {
            type: String,
            required: true
        },
        foodDesc: {
            type: String,
            required: false,
            default: 'This is the default description.'
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            foodIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleFavorite() {
            this.foodIsFavorite = !this.foodIsFavorite;
        }
    }
};
</script>

<style scoped>
img {
    height: 1.5em;
    float: right;
}
</style>   