<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ChatView from "./views/ChatView.vue";
</script>

<template>
    <header class="header">Phill's Chat App</header>
    <ChatView />
</template>

<style scoped>
.header {
    width: 100vw;
    background-color: white;
    text-align: center;
    font-size: 2em;
    padding: 10px;
}
</style>
