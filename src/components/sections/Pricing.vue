<script setup lang="ts">
import type { PricingConfig } from "@/configs/pricingConfig";
import { BCard, BCardText, BCardGroup, BContainer, BRow, BCol } from 'bootstrap-vue-next';

defineProps<{
  configs: PricingConfig
}>()
</script>

<template>

<BContainer>
  <h2 class="text-center">
    {{ configs.pricingTitle }}
  </h2>
  <BCardGroup class="card-group"> 
    <BRow class="d-block d-md-flex justify-content-center">
      <BCol v-for="card in configs.cards" class="card-column">
        <BCard class="text-center card" img-top>
          <template #header class="card-title">
              {{ card.title }}
          </template>
          <BCardText class="card-price">
            {{ card.price }}
          </BCardText>
          <BCardText v-for="line in card.description" class="card-desription">
            {{ line }}
          </BCardText>
          <div>
            <button class="w-100 btn btn-lg btn-primary button">
              {{ card.buttonText }}
            </button>
          </div>
        </BCard>
      </BCol>
    </BRow>
  </BCardGroup>
</BContainer>

</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

.card-price {
  font-size: 30px;
  font-weight: 400;
}

.card {
  border-radius: 5px !important;
  border: 1px solid gray !important;
}

.card-column {
  padding-top: 5%;
  padding-bottom: 5%;
  min-width: 200px;
  @include media.sm {
    padding-left: 10%;
    padding-right: 10%;
  }
  @include media.md {
    padding-left: 1%;
    padding-right: 1%;
  }
  @include media.lg {
    flex-grow: 0;
    flex-basis: 33%;
  }
}

.button {
  max-width: 75%;
  @include media.sm {
    max-width: 50%;
  }
  @include media.md {
    max-width: 90%;
  }
  @include media.xl {
    max-width: 50%;
  }
}

.card-group {
  display: block !important;
  // padding-left: 5%;
  // padding-right: 5%;
  @include media.md {
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  }
  // @include media.md {
  //   padding-left: 15%;
  //   padding-right: 15%;
  // }
}

</style>