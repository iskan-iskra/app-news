<template>
  <div>
    <div>newslist</div>
    <pre v-if="testResult">{{ testResult }}</pre>
    <pre v-else>{{ testError }}</pre>
  </div>
</template>

<script setup lang="ts">
import { topHeadlinesService } from "@/api";
import { TiTopHeadlinesResponse } from "@/types";
import { onMounted, ref } from "vue";

const testResult = ref<TiTopHeadlinesResponse>();
const testError = ref();
onMounted(async () => {
  try {
    testResult.value = await topHeadlinesService.getList({ country: "ru" });
  } catch (e) {
    console.log(e);
    testError.value = e;
  }
});
</script>

<style scoped lang="scss"></style>
