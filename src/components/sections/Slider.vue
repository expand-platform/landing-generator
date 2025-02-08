<script setup lang="ts">
import { CCarousel, CCarouselItem } from "@coreui/bootstrap-vue"
import { BCarousel, BCarouselSlide } from 'bootstrap-vue-next';



const props = defineProps<{
    images?: { src: string }[]
    padding?: string
}>()
console.log(props.images)
</script>

<template>

<BCarousel controls>
  <BCarouselSlide v-for="image in props.images" :img-src="image.src" />
</BCarousel>

</template>

<style lang="scss" scoped></style>


<!-- 
Идея как сделать кастомизируемое количество картинок в слайдере:
    в коде мы пишем цикл, который сделает определённое количество картинок в слайдере
    извне мы передаём массив с картинками, в зависимости от числа картинок будет выводится это же число картинок в слайдере
-->