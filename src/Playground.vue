<script setup lang="ts">
import Header from '@sections/Header.vue'
import Slider from '@sections/Slider.vue'

let images = [
  {
    src: "https://dummyimage.com/500x300.png?text=slide1"
  },
  {
    src: "https://dummyimage.com/500x300.png?text=slide2"
  },
  {
    src: "https://dummyimage.com/500x300.png?text=slide3"
  }
]
  


</script>

<template>
  <!-- <h2 class="title text-center my-3"> PlayGround </h2> -->
  <Header></Header>
  <div class="slider">
    <Slider :images="images"></Slider>
  </div>

  <!-- <Header logo="image" :menu="[]" color="#000"></Header> -->
</template>

<style lang="scss" scoped>
  // .slider {
  //   padding: 400px;
  //   padding-top: 200px;
  // }
</style>
