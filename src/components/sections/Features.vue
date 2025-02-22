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
          <CCard class="text-center ">
            <CCardBody>
              <BIcon :icon="feature.icon" :style="features?.style.icons" />
              <!-- <Icon :style="features?.style.icons">
                <Heart20Filled />
              </Icon> -->
              <!-- <div class="image" :style="features?.style.icons">
                <img src="@sicons/fluent/Money16Regular.svg" />
              </div> -->
              
              <CCardTitle>{{ feature.text }}</CCardTitle>
              <CCardText>{{ feature.description }}</CCardText>
              <CButton :href="feature.button.href" :color="feature.button.color" :style="features?.style.buttons">{{
                feature.button.text }}</CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

</style>
