  <script setup lang="ts">
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CContainer,
  CRow,
  CCol,
} from '@coreui/bootstrap-vue'
import { ref } from 'vue'

const count = ref(0)
console.log(count.value)
let image = 'https://dummyimage.com/100.png'

interface Card {
  text: string
  image: string
}

let props = defineProps<{
  cardText?: string
  cards?: Card[]
}>()

console.log(props.cardText)
</script>

<template>
  <CContainer>
    <CRow>
      <CCol v-for="card in cards">
        <CCard style="width: 18rem" >
          <CCardBody>
            <CCardTitle>{{ card.text }}</CCardTitle>
            <CCardText>{{ cardText }}</CCardText>
            <CButton href="#" color="primary">Go somewhere</CButton>
          </CCardBody>
          <CCardImage orientation="bottom" :src="card.image" alt="" />
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<style lang="scss" scoped></style>
