<script setup lang="ts">
import { usePreLoader, useAppTheme } from "@/composables";
import { Navigation } from "@/components";
import { onBeforeUnmount, onBeforeMount } from "vue";

usePreLoader();
const { initTheme } = useAppTheme();
onBeforeMount(() => {
  initTheme();
});
</script>

<template>
  <v-app>
    <Navigation />
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

<style lang="scss" scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>
