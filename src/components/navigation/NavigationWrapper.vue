<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";
import DeskTopNavigation from "./DeskTopNavigation.vue";
import MobileNavigation from "./MobileNavigation.vue";

const { mobile } = useDisplay();
</script>

<template>
  <MobileNavigation v-if="mobile" />
  <DeskTopNavigation v-else />
</template>

<style lang="scss">
.test {
  &__wrapper {
    width: 100%;
  }
}
</style>
