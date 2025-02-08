<script setup lang="ts">
import { CCarousel, CCarouselItem } from "@coreui/bootstrap-vue"

const props = defineProps<{
    images?: { src: string }[]
    padding?: string
}>()
console.log(props.images)
</script>

<template>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner" >
    <div class="carousel-item active" v-for="image in props.images">
      <img :src="image.src" class="d-block w-100" alt="slide">
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

<style lang="scss" scoped></style>


<!-- 
Идея как сделать кастомизируемое количество картинок в слайдере:
    в коде мы пишем цикл, который сделает определённое количество картинок в слайдере
    извне мы передаём массив с картинками, в зависимости от числа картинок будет выводится это же число картинок в слайдере
-->