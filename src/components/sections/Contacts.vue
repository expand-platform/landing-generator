<script setup lang="ts">
// import { phoneNumbers } from '@/configs/header/phones'
import type { contactsConfigT } from '@configs/contactsConfig'
import type { GlobalThemeConfig } from '@/configs/globalThemeConfig';

import { CContainer, CRow, CCol } from '@coreui/bootstrap-vue'

import BIcon from '@components/icons/BIcon.vue'

defineProps<{
  configs: contactsConfigT
  theme: GlobalThemeConfig
}>()
</script>

<template>
  <section :id="configs.anchorLink">
    <CContainer class="text-center">
      <h2 :style="configs.style.title">{{ configs.title }}</h2>
      <div class="img mb-4">
        <!-- image -->
        <figure :style="configs.style.image" class="contact-image m-auto"></figure>
      </div>
      <p class="mb-4" :style="configs.style.description">{{ configs.description }}</p>

      <!-- phones -->
      <div class="mb-4 phone text-primary" v-for="phoneNumber in configs.phoneNumbers" :key="phoneNumber">
        <a class="phone-link" :href="'tel: ' + phoneNumber">+38 {{ phoneNumber }}</a>
      </div>
      <div class="socials mb-4 d-flex justify-content-center">
        <CRow>
          <CCol v-for="icon in configs.socialIcons.icons" :key="icon.icon">
            <BIcon :icon="icon.icon" :url="icon.url" :text="icon.text" :style="configs.style.icons" />
          </CCol>
        </CRow>
      </div>
    </CContainer>
  </section>

</template>

<style lang="scss" scoped>
@use '@scss/base/media.scss';

/* image */
.contact-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;

  background-position: center;
  background-size: cover;

  @include media.md {
    width: 250px;
    height: 250px;
  }
}

.phone {
  text-decoration: underline;
  font-size: 24px;
}

.socials {
  gap: 1rem;
}
</style>
