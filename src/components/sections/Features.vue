<script setup lang="ts">
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CContainer,
  CRow,
  CCol,
} from '@coreui/bootstrap-vue'
import BIcon from '@components/icons/BIcon.vue'

interface Card {
  text: string
  description: string
  icon: any
  button: any
}

let props = defineProps<{
  cards?: Card[]
}>()
</script>

<template>
  <CContainer>
    <CRow>
      <CCol v-for="card in cards">
        <CCard style="width: 18rem; margin: 0.5rem; border: none">
        <BIcon :icon="card.icon.name" :size="card.icon.size" :margin="card.icon.margin" />
          <CCardBody>
            <CCardTitle>{{ card.text }}</CCardTitle>
            <CCardText>{{ card.description }}</CCardText>
            <CButton :href="card.button.href" :color="card.button.color">{{
              card.button.text
            }}</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<style lang="scss" scoped></style>
