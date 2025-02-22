<script setup lang="ts">
import type { PricingConfig } from "@/configs/pricingConfig";
import { BCard, BCardText, BCardGroup } from 'bootstrap-vue-next';

defineProps<{
  configs: PricingConfig
}>()
</script>

<template>

<BCardGroup style="padding: 40px;">
  <BCard v-for="card in configs.cards" :title="card.title" :img-src="card.src" img-alt="Image" img-top>
    <BCardText>
      {{ card.description }}
    </BCardText>
    <button>
        {{ card.button }}
    </button>
  </BCard>
 
</BCardGroup>

</template>

<style lang="scss" scoped>

</style>