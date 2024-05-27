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
      <router-view v-slot="{ Component }">
        <v-container class="overflow-x-hidden">
          <transition name="route" mode="out-in">
            <component :is="Component" />
          </transition>
        </v-container>
      </router-view>
    </v-main>
  </v-app>
</template>
