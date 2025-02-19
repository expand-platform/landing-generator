<script setup lang="ts">
import { ref } from 'vue';
import type { HeaderConfig } from "@configs/header/headerConfig"
/* components */
import { CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, CNavItem, CNavLink, CRow, CCol, CDropdownItem, CDropdownMenu, CDropdownToggle, CDropdown } from "@coreui/bootstrap-vue"

import BIcon from "@components/icons/BIcon.vue"

/* props */
defineProps<{
  configs: HeaderConfig
}>()

/* toggles */
const isBurgerVisible = ref(false)
</script>

<template>
  <CNavbar expand="lg" :style="configs.style.header">

    <!-- ? In Navbar component Container acts like a Row  -->
    <!-- ? Mobile row -->
    <CContainer class="col justify-content-between">

      <!-- ? logo  -->
      <CCol class="left-column">
        <CNavbarBrand href="/">
          <a v-if="configs.logo.text" class="logo-text" :style="{ color: configs.style.header.color }">{{
            configs.logo.text }}</a>
          <img v-else :src="configs.logo.image" class="logo-image" alt="site-logo" />
        </CNavbarBrand>
      </CCol>

      <!-- ? burger -->
      <CCol class="d-flex align-items-center justify-content-end">
        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={isBurgerVisible}
          @click="isBurgerVisible = !isBurgerVisible" />
      </CCol>
    </CContainer>

    <!-- collapsible content (<sm) / columns (>lg) -->
    <CContainer>
      <CCollapse class="col navbar-collapse justify-content-end align-items-center " :visible="isBurgerVisible">
        <!-- ? nav links -->

        <div class="row w-lg-100">
          <div class="col-lg flex-grow-2 flex-basis-lg-50">
            <CNavbarNav class="justify-content-end align-items-center ">
              <CNavItem v-for="navLink in configs.nav.links" :key="navLink">
                <CNavLink class="nav-link" :href="navLink.url" :active="navLink.active"
                  :style="{ color: configs.style.header.color }">
                  <!-- link text -->
                  <span :style="{ 'fontSize': configs.style.navLink.fontSize }" v-if="!navLink.dropdown">{{ navLink.text
                  }}</span>

                  <!-- dropdown -->
                  <CDropdown v-else variant="nav-item" :popper="false" dark>
                    <CDropdownToggle :style="{ 'fontSize': configs.style.navLink.fontSize }" color="secondary">{{
                      navLink.text }}</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem :style="{ 'fontSize': configs.style.dropdown.fontSize }"
                        v-for="dropdownLink in navLink.dropdown" :key="dropdownLink.text" :href="dropdownLink.url">{{
                          dropdownLink.text
                        }}</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </div>
          <aside class="phones col-lg text-center mb-2 mb-lg-0" v-if="configs.phone.numbers">
            <CRow class="h-100 align-items-center">
              <CCol v-for="phoneNumber in configs.phone.numbers" :key="phoneNumber">
                <a class="phone-link col-lg" :href="'tel:' + phoneNumber" :style="configs.style.phones"
                  target="_blank">{{ phoneNumber }}</a>
              </CCol>
            </CRow>
          </aside>

          <aside class="social-icons col-lg flex-grow-0 flex-basis-0">
            <CRow class="flex-nowrap h-100 align-items-center">
              <CCol v-for="icon in configs.socialIcons.icons" :key="icon.icon">
                <!-- ? icons -->
                <BIcon :icon="icon.icon" :url="icon.url" :style="configs.style.icons" :text="icon.text" />
              </CCol>
            </CRow>
          </aside>
        </div>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

.flex-basis-lg-50 {
  @include media.lg {
    flex-basis: 50%;
  }
}

.nav-link,
.social-icons {
  text-align: center;
}

.icon {
  width: 30px;
}

.icons {
  @include media.lg {
    flex-basis: 20%;
  }
}

.phone-link {
  display: inline-block;
  padding: 0 .5rem;
}

/* hovers */
a {
  text-decoration: none;
  transition: .5s;
}

a:hover {
  color: rgba(65, 207, 229, 0.837) !important;
}
</style>
