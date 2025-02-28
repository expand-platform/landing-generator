<script setup lang="ts">
import type { PricingConfig } from "@/configs/pricingConfig";
import { BCard, BCardText, BCardGroup } from 'bootstrap-vue-next';

defineProps<{
  configs: PricingConfig
}>()
</script>

<template>

<BCardGroup class="card-group">
  <BCard v-for="card in configs.cards" class="text-center card">
    <template #header class="card-title">
        {{ card.title }}
    </template>
    <BCardText class="card-price">
      {{ card.price }}
    </BCardText>
    <BCardText v-for="line in card.description" class="card-desription">
      {{ line }}
    </BCardText>
    <button class="w-100 btn btn-lg btn-primary">
      {{ card.buttonText }}
    </button>
  </BCard>
 
</BCardGroup>

</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

.card-price {
  font-size: 30px;
  font-weight: 400;
}

.card-group {
  padding-left: 5%;
  padding-right: 5%;
  @include media.md {
    padding-left: 15%;
    padding-right: 15%;
  }
}

</style>