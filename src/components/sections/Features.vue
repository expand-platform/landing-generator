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

    <CContainer>
      <CRow class="d-block d-md-flex row-cols-md-2 row-cols-xl-4">
        <CCol v-for="feature in features?.cards" :key="feature.text" class="mb-3">
          <CCard class="text-center text-md-start">
            <CCardBody>
              <BIcon :icon="feature.icon" :style="features?.style.icons" />
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

<style lang="scss" scoped></style>
