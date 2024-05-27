<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";
import DeskTopNavigation from "./DeskTopNavigation.vue";
import MobileNavigation from "./MobileNavigation.vue";

const { smAndUp } = useDisplay();
</script>

<template>
  <desk-top-navigation v-if="smAndUp" />
  <mobile-navigation v-else />
</template>
