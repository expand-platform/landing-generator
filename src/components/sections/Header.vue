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
  <CNavbar expand="lg" :style="configs.style">

    <!-- ? In Navbar component Container acts like a Row  -->
    <!-- ? Mobile row -->
    <CContainer class="col justify-content-between">

      <!-- ? logo  -->
      <CCol class="left-column">
        <CNavbarBrand href="/">
          <a v-if="configs.logo.text" class="logo-text" :style="{ color: configs.style.color }">{{
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
      <CCollapse class="col navbar-collapse justify-content-end" :visible="isBurgerVisible">
        <CNavbarNav class="align-items-center">
          <!-- ? nav links -->
          <CNavItem v-for="navLink in configs.nav.links" :key="navLink">
            <CNavLink class="nav-link" :href="navLink.url" :active="navLink.active"
              :style="{ color: configs.style.color }">

              <!-- link text -->
              <span v-if="!navLink.dropdown">{{ navLink.text }}</span>

              <!-- dropdown -->
              <CDropdown v-else variant="nav-item" :popper="false" dark>
                <CDropdownToggle color="secondary">{{ navLink.text }}</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem v-for="dropdownLink in navLink.dropdown" :key="dropdownLink.text"
                    :href="dropdownLink.url">{{ dropdownLink.text
                    }}</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <!-- ? icons -->
        <aside class="social-icons">
          <BIcon v-for="icon in configs.socialIcons.icons" :key="icon.icon" :icon="icon.icon" :url="icon.url"
            :style="icon.style" :text="icon.text" />
        </aside>
        <!-- ? phones -->
        <aside class="phones" v-if="configs.phones.enabled">
          <CRow>
            <a class="phone-link" v-for="phoneNumber in configs.phones.numbers" :key="phoneNumber"
              :href="'tel:' + phoneNumber">{{ phoneNumber }}</a>
          </CRow>
        </aside>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<style lang="scss" scoped>
.nav-link,
.social-icons {
  text-align: center;
}

.icon {
  width: 30px;
}

.phones {
  margin: 0 1rem;
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
