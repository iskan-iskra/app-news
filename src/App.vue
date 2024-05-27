<script setup lang="ts">
import { usePreLoader, useAppTheme, useMobileVh } from "@/composables";
import { AppNavigation } from "@/components";
import { onBeforeMount } from "vue";

usePreLoader();
useMobileVh();

const { initTheme } = useAppTheme();

onBeforeMount(() => {
  initTheme();
});
</script>

<template>
  <v-app>
    <app-navigation />
    <v-main :scrollable="true">
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
