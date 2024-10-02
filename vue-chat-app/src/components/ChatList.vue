<script setup lang="ts">
import ChatItem from "./ChatItem.vue";
</script>
<template>
    <div class="list">
        <input class="search" placeholder="search" />
        <br />
        <ChatItem name="Test Name" selected="{true}" />
        <ChatItem name="Bob Name" />
        <ChatItem name="Tim the guy" />
        <ChatItem name="Who knows Name" />
    </div>
</template>

<style scoped>
.search {
    height: 25px;
    width: 90%;
    border-radius: 10px;
    text-indent: 10px;
    border-style: solid;
}
.list {
    display: flex;
    flex-direction: column;

    padding: 10px;
    align-items: center;
}
</style>
