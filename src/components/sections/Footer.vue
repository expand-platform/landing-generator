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
        <BRow class="d-block d-md-flex justify-content-md-between align-items-md-center text-center height">
            <BCol class="text-md-start padding"> {{ configs.text }} </BCol>
            <BCol class="text-md-end padding"> 
                <span v-for="phone in configs.phoneNumbers" class="px-2">
                    {{ phone }}
                </span>
            </BCol>
        </BRow>
        </BContainer>
    </footer>

</template>

<style lang="scss" scoped>
.footer-box {
    background-color: black;
    color: white;
    width: 100%;
}

.padding {
    padding: 1em 0.5em;
}

</style>