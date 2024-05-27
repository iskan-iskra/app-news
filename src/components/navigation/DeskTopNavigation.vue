<script setup lang="ts">
import { useAppTheme, useAppNavigation } from "@/composables";

const { toggleTheme, currentIcon } = useAppTheme();

const { currentRoutePath, routerArray } = useAppNavigation();
</script>

<template>
  <v-toolbar
    tag="header"
    class="app-header position-sticky top-0"
    density="comfortable"
  >
    <v-container>
      <v-row :align="'center'">
        <v-col cols="auto">
          <v-toolbar-title>News App</v-toolbar-title>
        </v-col>
        <v-col cols="auto">
          <v-tabs :model-value="currentRoutePath" :align-tabs="'start'">
            <v-tab
              v-for="route in routerArray"
              :key="route.path"
              :text="route.title"
              :value="route.path"
              @click="route.action"
            />
          </v-tabs>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-btn icon="mdi-magnify" />
        </v-col>
        <v-col cols="auto">
          <v-btn :icon="currentIcon" @click="toggleTheme" />
        </v-col>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<style scoped lang="scss">
.app-header {
  user-select: none;
}
</style>
