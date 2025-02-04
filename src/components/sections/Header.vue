<script setup lang="ts">
import { ref } from 'vue';

/* components */
import { CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, CNavItem, CNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider, CForm, CFormInput, CButton, CRow, CCol } from "@coreui/bootstrap-vue"

// import BIcon from "@components/icons/BIcon.vue"

/* props */
defineProps<{
  configs: any
}>()

/* toggles */
const isBurgerVisible = ref(false)
</script>

<template>
  <!-- {{ configs }} -->

  <!-- <BIcon /> -->
  <CNavbar expand="lg"
    :style="{ backgroundColor: configs.style.bg, color: configs.style.color, padding: configs.style.padding }">
    <CContainer>
      <CRow class="w-100 justify-content-between align-items-center">
        <!-- ? left side -->

        <CCol class="left-column d-flex">
          <!-- ? logo text or image -->
          <CNavbarBrand href="#">
            <span v-if="configs.logo.text" class="logo-text" :style="{ color: configs.color }">{{
              configs.logo.text }}</span>
            <img v-else :src="configs.logo.image" class="logo-image" alt="site-logo" />
          </CNavbarBrand>

          <!-- <CForm class="d-flex">
            <CFormInput type="search" class="me-2" placeholder="Search" />
          </CForm> -->
        </CCol>

        <!-- ? right side -->
        <CCol class="right-column">
          <CNavbarToggler @click="isBurgerVisible = !isBurgerVisible" />
          <CCollapse class="navbar-collapse justify-content-end" :visible="isBurgerVisible">
            <CNavbarNav>

              <!-- links -->
              <CNavItem v-for="navLink in configs.nav.links" :key="navLink">
                <CNavLink :href="navLink.url" :active="navLink.active" :style="{ color: configs.color }">
                  {{ navLink.text }}
                </CNavLink>
              </CNavItem>


              <!-- <CButton type="submit" color="success" variant="outline">Search</CButton> -->

              <!-- account dropdown -->
              <!-- <CDropdown variant="nav-item" class="account">
                <CDropdownToggle color="secondary">
                  Иконка
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown> -->
            </CNavbarNav>
          </CCollapse>
        </CCol>

      </CRow>
    </CContainer>
  </CNavbar>
</template>

<style lang="scss" scoped>
.icon {
  width: 30px;
}
</style>

<!-- TODO:

  Секции (parts) хедера

  1. Логотип (только слева)
  2. Меню (бургер + статичное)
  3. Кнопки (только справа)
  4. Поле поиска (возле лого или справа)
  5. Иконка профиля (только справа)

  Самое проблемное:
  * Бургер *
  * Поле поиска *

  Поиск может быть по центру, справа и слева на десктопе
  Бургер всегда справа



-->
