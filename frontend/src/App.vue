<template>
  <div class="main-wrapper">
    <div class="text-black" style="color: black;">
      <div v-for="i in 100">Ready to use</div>
    </div>
  </div>
</template>

<script setup>
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

/* Hide scrollbar for webkit browsers */
#app::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for Firefox */
#app {
  scrollbar-width: none; /* Firefox */
}

/* Optional: Hide scrollbar when user is hovering over the area (better UX in some cases) */
#app:hover::-webkit-scrollbar {
  display: none;
}

</style>
