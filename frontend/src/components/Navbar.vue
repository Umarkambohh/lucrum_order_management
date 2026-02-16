<template>
  <div class="navbar-wrapper bg-surface border-b">
    <div class="navbar-wrapper__content">
      <p class="text-caption text-md-body-2 text-tundora mb-0">
        Order Management<span class="text-secondary pl-2">> {{ activeTab }}</span>
      </p>
      <v-icon icon="mdi-home" />

    </div>
  </div>

  <div class="sidebar border-e">
    <button class="d-none d-md-block mb-4" @click="goToHome"><img width="36" :src="lucrumXIcon" alt=""></button>
    <button :class="{ 'active-tab': activeTab === i.title }" v-for="(i, index) in navLinks" :key="index"
      @click="handleActiveTab(index)">
      <v-icon :icon="i.icon" :size="smAndDown ? 22 : 32" /> <span class="text-xs text-lg-body-2">{{ i.title }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
const lucrumXIcon = "/assets/lucrum_employee_portal/js/images/logox.png";
import { useDisplay } from 'vuetify'

const emit = defineEmits(['active-tab'])
const { smAndDown } = useDisplay()

const activeTab = ref("D-Board");

const navLinks = [
  { title: "Orders", icon: 'mdi-view-dashboard' },
];

const goToHome = () => {
  frappe.set_route("/");
  location.reload();
};

const handleActiveTab = (index) => {
  emit('active-tab', index)
  activeTab.value = navLinks[index].title;
};
</script>

<style scoped lang="scss">
@use '../styles/variables' as *;

.navbar-wrapper {
  padding: 6px 12px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  // box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1) !important;
  // border-bottom: 1px solid #393b3c;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1800px;
    margin: 0 auto;
  }

  @media (min-width: $md) {
    padding: 12px 20px 12px 80px;
  }
}

.sidebar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  // padding: 8px 0;
  background-color: #212121;
  z-index: 1;

  @media (min-width: $md) {
    top: 0;
    left: 0;
    width: 65px;
    height: 100%;
    flex-direction: column;
  }
}

.sidebar button {
  background: none;
  border: none;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  padding: 7px 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: $md) {
    height: auto;
  }
}

.active-tab {
  width: 100%;
  background: #302929 !important;
}
</style>
