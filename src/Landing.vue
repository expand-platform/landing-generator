<script setup lang="ts">
/* header */
import Header from '@sections/Header.vue'
import { headerConfig } from '@/configs/header/headerConfig';

import Slider from "@sections/Slider.vue"
import { sliderConfig } from '@/configs/sliderConfig';

import Features from '@sections/Features.vue';
import { featuresConfig } from '@configs/featuresConfig'

import Contacts from '@sections/Contacts.vue'
import { contactsConfig } from '@configs/contactsConfig';

import Footer from "@sections/Footer.vue";
import { footerConfig } from '@/configs/footerConfig';
</script>

<template>
  <Header :configs="headerConfig"></Header>

  <Slider :configs="sliderConfig"></Slider>

  <Features :features="featuresConfig"></Features>

  <Contacts :configs="contactsConfig"></Contacts>

  <Footer :configs="footerConfig"></Footer>
</template>

<style lang="scss" scoped></style>
