<script setup lang="ts">
import Pricing from '@sections/Pricing.vue';
import { pricingConfig } from '@/configs/pricingConfig';
</script>

<template>
  
<Pricing :configs="pricingConfig"></Pricing>

</template>

<style lang="scss" scoped></style>
