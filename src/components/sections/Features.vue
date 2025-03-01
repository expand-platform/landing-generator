<script setup lang="ts">
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CContainer,
  CRow,
  CCol,
  CCardImage
} from '@coreui/bootstrap-vue'
import BIcon from '@components/icons/BIcon.vue'

import type { FeaturesConfigT } from '@configs/featuresConfig.ts'

defineProps<{
  features?: FeaturesConfigT
}>()
</script>

<template>
  <section class="features" :style="features?.style.section">
    <h2 class="text-center" :style="features?.style.title">{{ features?.title }}</h2>
    <CContainer>
      <CRow class="d-block d-md-flex row-cols-md-2 row-cols-xl-4">
        <CCol v-for="feature in features?.cards" :key="feature.text" class="mb-3">
          <a :href="feature.button.href">
            <CCard class="text-center">
              <!-- ? add / remove specific styles depending on icon / image pick -->
              <CCardBody class="p-0 pb-3">
                <!--? icon or image -->
                <section class="img-wrapper mb-3" :class="{ 'px-2': feature.icon }">
                  <BIcon v-if="feature.icon" :icon="feature.icon" :url="feature.button.href"
                    :style="features?.style.icons" />
                  <!--? orientation top / bottom for corner radius -->
                  <CCardImage :style="features?.style.images" v-else orientation="top" :src="feature.image" class="card-img mb-3" />
                </section>

                <!-- texts -->
                <section class="card-content" :class="{ 'px-2': feature.image }">
                  <CCardTitle>{{ feature.text }}</CCardTitle>
                  <CCardText>{{ feature.description }}</CCardText>
                  <CButton :href="feature.button.href" :color="feature.button.color" :style="features?.style.buttons">{{
                    feature.button.text }}</CButton>
                </section>
              </CCardBody>
            </CCard>
          </a>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

.card-img {
  max-width: 80%;

  @include media.sm {
    max-width: 60%;
  }
  @include media.lg {
    max-width: 100%;
  }
}

.img-wrapper {

}
</style>
