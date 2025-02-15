<script setup lang="ts">
import type { FooterConfig } from "@/configs/footerConfig";
import { BContainer, BRow, BCol } from "bootstrap-vue-next";

const props = defineProps<{
    configs: FooterConfig
}>()


</script>

<template>

    <!-- <footer class="footer-box">
        <div class="left-box">

        </div>
        <div class="right-box">

        </div>
    </footer> -->
    <footer class="footer-box">
        <BContainer>
        <BRow class="justify-content-between">
            <BCol> Column </BCol>
            <BCol> Column </BCol>
        </BRow>
        </BContainer>
    </footer>

</template>

<style lang="scss" scoped>
.footer-box {
    background-color: black;
    color: white;
    width: 100%;
    height: 100px;
}
</style>