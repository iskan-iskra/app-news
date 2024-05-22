<script setup lang="ts">
import { RouterPath } from "@/const";
import { topHeadlinesService } from "@/api";
import { onMounted, ref } from "vue";
import { TiTopHeadlinesResponse } from "@/types";
const testResult = ref<TiTopHeadlinesResponse>();
onMounted(async () => {
  testResult.value = await topHeadlinesService.getList({ country: "ru" });
});
</script>

<template>
  <nav>
    <router-link :to="RouterPath.MAIN">Home</router-link> |
    <router-link :to="RouterPath.NEWS_LIST">News list</router-link> |
    <router-link :to="RouterPath.ABOUT">About</router-link> |
  </nav>
  <router-view />

  <pre>{{ testResult }}</pre>
</template>

<style lang="scss" scoped></style>
