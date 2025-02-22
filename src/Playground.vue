<script setup lang="ts">
import Contacts from '@components/sections/Contacts.vue';
import { contactsConfig } from '@configs/contactsConfig';
</script>

<template>
    <Contacts :configs="contactsConfig"/>
</template>

<style lang="scss" scoped></style>
