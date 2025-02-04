<script setup lang="ts">
interface iconProps {
  icon?: string, // "bi-alarm", "bi-time"
  size?: string, // px, em, rem
  color?: string, // #000, #fff
}

const iconProps = withDefaults(defineProps<iconProps>(), {
  icon: "bi-box-seam",
  size: "1.5rem",
  color: "#000",
})
</script>

<!--
  How to use this component:

  ? <BIcon />
  ? <BIcon icon="bi-heart" size="3rem" color="#fff" />
-->

<template>
  <i :class="['bi', icon]" :style="{ fontSize: size, color: color }"></i>
</template>

<style lang="scss" scoped></style>
