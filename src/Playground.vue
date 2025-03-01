<script setup lang="ts">
import Contacts from '@components/sections/Contacts.vue'
import { contactsConfig } from '@configs/contactsConfig'
import Pricing from '@sections/Pricing.vue'
import { timeframePricingConfig } from '@/configs/price/timeframePricingConfig'
</script>

<template>
  <Pricing :configs="timeframePricingConfig"></Pricing>
  <!-- <Contacts :configs="contactsConfig" /> -->
</template>

<style lang="scss" scoped></style>
