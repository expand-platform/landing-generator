<script setup lang="ts">
import Contacts from '@components/sections/Contacts.vue'
import { contactsConfig } from '@configs/contactsConfig'
import Pricing from '@sections/Pricing.vue'
import { pricingConfig } from '@/configs/pricingConfig'
</script>

<template>
  <Pricing :configs="pricingConfig"></Pricing>
  <!-- <Contacts :configs="contactsConfig" /> -->
</template>

<style lang="scss" scoped></style>
