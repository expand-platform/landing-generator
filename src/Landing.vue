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

import { globalThemeConfig } from './configs/globalThemeConfig';
</script>

<template>
  <div :style="globalThemeConfig.common">

    <Header :configs="headerConfig" :theme="globalThemeConfig"></Header>
  
    <Slider :configs="sliderConfig" :theme="globalThemeConfig"></Slider>
  
    <!-- cards (services) -->
    <Features :features="timeframesFeaturesConfig" :theme="globalThemeConfig"></Features>
    <Features :features="lifeSpheresfeaturesConfig" :theme="globalThemeConfig"></Features>
  
    <!-- цены -->
    <Pricing :configs="timeframePricingConfig" :theme="globalThemeConfig"></Pricing>
    <Pricing :configs="lifeSpheresPricingConfig" :theme="globalThemeConfig"></Pricing>
    <Pricing :configs="stonesPricingConfig" :theme="globalThemeConfig"></Pricing>
  
    <Contacts :configs="contactsConfig" :theme="globalThemeConfig"></Contacts>
  
    <Footer :configs="footerConfig" :theme="globalThemeConfig"></Footer>
  </div>
</template>

<style lang="scss" scoped>

</style>
