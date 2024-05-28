<template>
  <div>top news</div>

  <template v-if="testResult">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        v-for="newsItem in testResult.articles"
        :key="newsItem.url"
      >
        <app-top-news-card :news="newsItem" />
      </v-col>
    </v-row>
  </template>

  <pre v-else>{{ testError }}</pre>
</template>

<script setup lang="ts">
import { topHeadlinesService } from "@/api";
import { CountryCodesTopNews } from "@/const";
import { TiTopHeadlinesResponse } from "@/types";
import { onMounted, ref } from "vue";
import { AppTopNewsCard } from "@/components";

const testResult = ref<TiTopHeadlinesResponse>();
const testError = ref();
onMounted(async () => {
  try {
    testResult.value = await topHeadlinesService.getList({
      country: CountryCodesTopNews["United States"],
    });
  } catch (e) {
    console.log(e);
    testError.value = e;
  }
});
</script>

<style scoped lang="scss"></style>
