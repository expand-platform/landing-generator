<script setup lang="ts">
import type { contactsConfigT } from '@configs/contactsConfig'

import { CContainer } from '@coreui/bootstrap-vue'

defineProps<{
  configs?: contactsConfigT
}>()
</script>

<template>
  <CContainer>
    <h2>{{ configs?.title }}</h2>
    
  </CContainer>
</template>

<style lang="scss" scoped></style>
