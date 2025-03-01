<script setup lang="ts">
import { phoneNumbers } from '@/configs/header/phones'
import type { contactsConfigT } from '@configs/contactsConfig'

import { CContainer, CImage, CRow, CCol } from '@coreui/bootstrap-vue'

import BIcon from '@components/icons/BIcon.vue'

defineProps<{
  configs?: contactsConfigT
}>()
</script>

<template>
  <CContainer class="text-center">
    <h2 :style="configs?.style.title">{{ configs?.title }}</h2>
    <div class="img mb-4">
      <CImage fluid :src="configs?.image" :style="configs?.style.image" />
    </div>
    <p class="mb-4" :style="configs?.style.description">{{ configs?.description }}</p>
    <div class="mb-4 phone text-primary" v-for="phoneNumber in configs?.phoneNumbers">
      <a class="" :href="'tel: ' + phoneNumber">+38 {{ phoneNumber }}</a>
    </div>
    <div class="socials mb-4 d-flex justify-content-center">
      <CRow>
        <CCol v-for="icon in configs?.socialIcons.icons">
          <BIcon :icon="icon.icon" :url="icon.url" :text="icon.text" :style="configs?.style.icons" />
        </CCol>
      </CRow>
    </div>
  </CContainer>
</template>

<style lang="scss" scoped>
@use '@scss/base/media.scss';

.phone {
  text-decoration: underline;
  font-size: 24px;
}

.socials {
  gap: 1rem;
}
</style>
