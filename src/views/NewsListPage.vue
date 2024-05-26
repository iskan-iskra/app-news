<template>
  <div>
    <div>newslist</div>
    <pre>{{ testResult }}</pre>
  </div>
</template>

<script setup lang="ts">
import { topHeadlinesService } from "@/api";
import { TiTopHeadlinesResponse } from "@/types";
import { onMounted, ref } from "vue";

const testResult = ref<TiTopHeadlinesResponse>();

onMounted(async () => {
  try {
    testResult.value = await topHeadlinesService.getList({ country: "ru" });
  } catch (e) {
    console.log(e);
  }
});
</script>

<style scoped lang="scss"></style>
