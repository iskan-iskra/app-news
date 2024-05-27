<script setup lang="ts">
import { useAppTheme, useAppNavigation } from "@/composables";

const { toggleTheme, currentTheme, currentIcon } = useAppTheme();

const { currentRoutePath, routerArray } = useAppNavigation();
</script>

<template>
  <v-bottom-navigation
    tag="header"
    :model-value="currentRoutePath"
    @update:model-value="undefined"
  >
    <v-btn
      v-for="route in routerArray"
      :key="route.path"
      :active="route.active"
      :value="route.path"
      :color="route.active ? 'primary' : 'default'"
      @click="route.action"
    >
      <v-icon
        :icon="route.icon"
        :color="route.active ? 'primary' : 'default'"
      />
      <span>{{ route.title }}</span>
    </v-btn>
    <v-btn @click="toggleTheme" :active="false" :value="undefined">
      <v-icon :icon="currentIcon" />
      <span>{{ currentTheme }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>
