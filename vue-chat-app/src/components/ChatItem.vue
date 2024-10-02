<script setup lang="ts">
defineProps<{
    name: String;
    selected: Boolean;
}>();
</script>

<template>
    <div class="item" :class="{ selected: selected }">
        <p>{{ name }}</p>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    height: 50px;
    text-indent: 15px;
    border: lightgrey 1px ;
    border-style: none none solid;
}

.selected {
    background-color: rgba(194, 70, 70, 0.82);
    border-radius: 20px;
}
</style>
