<script setup lang="ts">
import { usePreLoader, useAppTheme } from "@/composables";
import { AppNavigation } from "@/components";
import { onBeforeMount } from "vue";

usePreLoader();

const { initTheme } = useAppTheme();

onBeforeMount(() => {
  initTheme();
});
</script>

<template>
  <v-app>
    <app-navigation />
    <v-main>
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <v-container class="overflow-x-hidden" :key="route.path">
            <component :is="Component" />
          </v-container>
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>
