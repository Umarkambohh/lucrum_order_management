<template>
  <div class="main-wrapper bg-light">
    <Navbar @active-tab="handleActiveTab" />
    <div class="main-wrapper__child">
      <keep-alive>
        <component :is="activeComponent" />
      </keep-alive>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Navbar from "./components/Navbar.vue";
import OrderManagement from "./pages/OrderManagement.vue";

const activeTab = ref(0);

// Handle tab change from Navbar
const handleActiveTab = (index) => {
  activeTab.value = index;
};

const componentsMap = {
  0: OrderManagement,
  1: OrderManagement,
};

const activeComponent = computed(() => componentsMap[activeTab.value]);
</script>

<style>
#app {
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000 !important;
  overflow-y: scroll;
}

#app::-webkit-scrollbar {
  display: none;
}

#app {
  scrollbar-width: none; /* Firefox */
}

/* Optional: Hide scrollbar when user is hovering over the area (better UX in some cases) */
#app:hover::-webkit-scrollbar {
  display: none;
}

/* Prevent host/global CSS from overriding MDI icon font */
.v-icon.mdi::before,
.mdi.v-icon::before,
.mdi::before {
  font-family: "Material Design Icons" !important;
  font-style: normal !important;
  font-weight: normal !important;
}

</style>
