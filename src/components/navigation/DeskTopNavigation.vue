<script setup lang="ts">
import { useAppTheme, useAppNavigation } from "@/composables";

const { toggleTheme, currentIcon } = useAppTheme();

const { currentRoutePath, routerArray } = useAppNavigation();
</script>

<template>
  <v-app-bar tag="header" class="user-select-none" density="comfortable">
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
          <v-btn :icon="currentIcon" @click="toggleTheme" />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
