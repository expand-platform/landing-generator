<script setup lang="ts">
interface iconProps {
  icon?: string, // "bi-alarm", "bi-time"
  url?: string, // link to website
  text?: string,
  style?: any,
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
  <a :href="url" target="_blank" class="wrapper" :style="style">
    <!-- ? icon -->
    <i class="icon" :class="['bi', 'bi-' + icon]" :style="style"></i>

    <!-- ? text -->
    <span class="text">{{ text }}</span>
  </a>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.icon {
  padding: 0 .5rem;
}

.bi,
.text {
  width: auto;
}

.text {
  padding: 0;
}
</style>
 