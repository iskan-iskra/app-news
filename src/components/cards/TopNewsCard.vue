<script setup lang="ts">
import { TiTopHeadlinesResponseItem } from "@/types";
import { defineProps, PropType } from "vue";

const props = defineProps({
  news: Object as PropType<TiTopHeadlinesResponseItem>,
});
</script>

<template>
  <v-card>
    <v-img
      height="200px"
      :src="props.news?.urlToImage || require('@/assets/news-placeholder.jpg')"
    ></v-img>
    <v-card-title>{{ props.news?.title }}</v-card-title>

    <v-card-subtitle>{{ props.news?.description }}</v-card-subtitle>
  </v-card>
</template>
