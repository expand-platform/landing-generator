<script setup lang="ts">
import Header from '@sections/Header.vue'
import Features from './components/sections/Features.vue';
import { features } from './config/features';


</script>

<template>
  <h2 class="title text-center my-3"> PlayGround </h2>
  <Header logo-type="text"></Header>
  <!-- <Header logo="image" :menu="[]" color="#000"></Header> -->
  <Features card-text="This is text for card" :cards="features"></Features>
</template>

<style lang="scss" scoped></style>
