<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ChatList from "../components/ChatList.vue";
</script>

<template>
    <div class="window">
        <ChatList class="section" />

        <RouterView class="section"/>
    </div>
</template>

<style scoped>
.window {
    display: grid;
    grid-template-columns: 2fr 8fr;
    height: calc(100% - 4.2em);
}

.section  {
    border: 2px black solid;
    border-radius: 7px;
    margin: .5em;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.81);
}
</style>
