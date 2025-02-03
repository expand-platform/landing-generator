<script setup lang="ts">
import { ref } from 'vue';

import { CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, CNavItem, CNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider, CForm, CFormInput, CButton, CRow, CCol } from "@coreui/bootstrap-vue"

const isBurgerVisible = ref(false)

const headerProps = defineProps<{
  logo?: string, // image or plain text
}>()


class HeaderConfigs {
  props: typeof headerProps
  logo: string | undefined
  typeOfLogo: string | undefined

  constructor(props: typeof headerProps) {
    this.props = props

    /* initials */

    this.setInitialConfigs()
  }

  bindThis() {
    this.setInitialConfigs = this.setInitialConfigs.bind(this);

    this.detectLogoType = this.detectLogoType.bind(this);

    this.setLogo = this.setLogo.bind(this);
  }


  /* init */
  setInitialConfigs() {
    this.logo = this.props.logo
    this.typeOfLogo = "text"

    this.detectLogoType()
  }

  /* text or image? */
  detectLogoType() {
    const logoString = this.props.logo

    const imageURLPattern = [
      "http://", "https://", "./", "/"
    ]

    const isImage = imageURLPattern.some(pattern => logoString?.includes(pattern))

    if (isImage) this.typeOfLogo = "image"
  }
}

const configs = new HeaderConfigs(headerProps)

</script>

<template>
  <CNavbar expand="lg" color-scheme="light" class="bg-light">
    <CContainer>
      <CRow class="w-100 justify-content-between align-items-center">
        <!-- ? left side -->

        <CCol class="left-column d-flex">
          <!-- ? logo text or image -->
          <CNavbarBrand href="#">
            <span v-if="configs.typeOfLogo == 'text'" class="logo">{{ configs.logo }}</span>
            <img v-else :src="configs.logo" class="logo" alt="site-logo" />
          </CNavbarBrand>

          <CForm class="d-flex">
            <CFormInput type="search" class="me-2" placeholder="Search" />
          </CForm>
        </CCol>

        <!-- ? right side -->
        <CCol class="right-column">
          <CNavbarToggler @click="isBurgerVisible = !isBurgerVisible" />
          <CCollapse class="navbar-collapse justify-content-end" :visible="isBurgerVisible">
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>

              <CButton type="submit" color="success" variant="outline">Search</CButton>

              <!-- account dropdown -->
              <CDropdown variant="nav-item" class="account">
                <CDropdownToggle color="secondary">
                  Иконка
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
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
