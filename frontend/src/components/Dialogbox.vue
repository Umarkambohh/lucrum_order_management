<!-- Dialogbox.vue -->
<template>
  <v-dialog v-model="model" :width="width">
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center pe-2">
        <span class="text-body-1 font-weight-regular">{{ title }}</span>
        <v-btn size="small" icon variant="text" color="grey" @click="close">
          <v-icon icon="mdi-close" />
        </v-btn>
      </v-card-title>

      <v-card-item class="pt-0">
        <slot></slot>
      </v-card-item>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: "Dialog",
  },
  width: {
    type: [String, Number],
    default: 600,
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const close = () => emit("update:modelValue", false);
</script>
