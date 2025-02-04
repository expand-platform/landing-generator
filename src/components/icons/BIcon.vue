<script setup lang="ts">
interface iconProps {
  icon?: string, // "bi-alarm", "bi-time"
  size?: string, // px, em, rem
  color?: string, // #000, #fff
  url?: string, // link to website
  margin?: string, // link to website
}

const iconProps = withDefaults(defineProps<iconProps>(), {
  icon: "box-seam",
  size: "1.5rem",
  color: "#000",
  url: "",
  margin: "0 .5rem",
})
</script>

<!--
  How to use this component:

  ? <BIcon />
  ? <BIcon icon="bi-heart" size="3rem" color="#fff" />
-->

<template>
  <a :href="url" target="_blank">
    <i :class="['bi', 'bi-'+icon]" :style="{ fontSize: size, color: color, margin: margin }"></i>
  </a>
</template>

<style lang="scss" scoped></style>
