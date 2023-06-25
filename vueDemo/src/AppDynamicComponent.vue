<template>
    <p>Choose what part of this page you want to see:</p>
    <button @click="activeComp = 'animal-collection'">Animals</button>
    <button @click="activeComp = 'food-items'">Food</button><br>
    <div>
        <component :is="activeComp"></component>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            activeComp: ''
        }
    }
}
</script>
  
<style scoped>
button {
    padding: 5px;
    margin: 10px;
}

div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
}
</style>   