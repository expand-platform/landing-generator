<script setup lang="ts">
/* header */
import Header from '@sections/Header.vue'
import { headerConfig } from '@/configs/header/headerConfig';

import Slider from "@sections/Slider.vue"
import { sliderConfig } from '@/configs/sliderConfig';

import Features from '@sections/Features.vue';
import { lifeSpheresfeaturesConfig } from '@/configs/features/lifeSpheresFeaturesConfig'
import { timeframesFeaturesConfig } from '@/configs/features/timeframesFeaturesConfig'

import Contacts from '@sections/Contacts.vue'
import { contactsConfig } from '@configs/contactsConfig';

import Footer from "@sections/Footer.vue";
import { footerConfig } from '@/configs/footerConfig';

import Pricing from '@sections/Pricing.vue';
import { timeframePricingConfig } from '@/configs/price/timeframePricingConfig';
import { lifeSpheresPricingConfig } from '@/configs/price/lifeSpheresPricingConfig';
import { stonesPricingConfig } from './configs/price/stonesPricingConfig';
</script>

<template>
  <Header :configs="headerConfig"></Header>

  <Slider :configs="sliderConfig"></Slider>

  <!-- cards (services) -->
  <Features :features="timeframesFeaturesConfig"></Features>
  <Features :features="lifeSpheresfeaturesConfig"></Features>

  <!-- цены -->
  <Pricing :configs="timeframePricingConfig"></Pricing>
  <Pricing :configs="lifeSpheresPricingConfig"></Pricing>
  <Pricing :configs="stonesPricingConfig"></Pricing>

  <Contacts :configs="contactsConfig"></Contacts>

  <Footer :configs="footerConfig"></Footer>
</template>

<style lang="scss" scoped></style>
