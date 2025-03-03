<script setup lang="ts">
import type { PricingConfig } from "@/configs/price/timeframePricingConfig";
import { BCard, BCardText, BCardGroup, BContainer, BRow, BCol } from 'bootstrap-vue-next';

defineProps<{
  configs: PricingConfig
}>()
</script>

<template>
  <section :id="configs.anchorLink" class="anchor-section">
    <section class="section-wrapper" :style="configs.style?.section">
      <BContainer>
        <section class="text-center">
          <h2>
            {{ configs.title }}
          </h2>
          <p class="subtitle mb-1" v-for="line in configs.subtitle" :key="line">
            {{ line }}
          </p>
        </section>
        <BCardGroup class="card-group">
          <BRow class="d-block d-md-flex row-cols-md-2 justify-content-center">
            <BCol v-for="card in configs.cards" :key="card.price" class="card-column">
              <BCard class="text-center card" img-top>
                <template #header>
                  <h4 class="mb-0">
                    {{ card.title }}
                  </h4>
                </template>
                <BCardText class="card-price">
                  {{ card.price }}
                </BCardText>
                <BCardText v-for="line in card.advantages" :key="line" class="card-desription px-3 text-start">
                  {{ line }}
                </BCardText>
                <div>
                  <a class="w-100 btn btn-lg btn-primary button" href="#">
                    {{ card.buttonText }}
                  </a>
                </div>
              </BCard>
            </BCol>
          </BRow>
        </BCardGroup>
      </BContainer>
    </section>
  </section>

</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";


.card-group {
  display: block !important;

  @include media.md {
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
  }
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

.card {
  border-radius: 5px !important;
  border: 1px solid gray !important;
}


.card-price {
  font-size: 30px;
  font-weight: 400;
}

.card-desription {
  font-size: 1.05rem;
}

.button {
  // max-width: 75%;

  @include media.sm {
    max-width: 75%;
  }

  @include media.md {
    max-width: 100%;
  }

  @include media.xl {
    // max-width: 50%;
  }
}
</style>
