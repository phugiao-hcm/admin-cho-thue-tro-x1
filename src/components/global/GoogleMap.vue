<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'
import type { PropType } from 'vue'

// API key khai báo fix sẵn (nên để trong .env)
// const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const API_KEY = 'AIzaSyD2_kkzvfEJmLHoOV4ok9LfdoaNxTFcGac'

// Truyền props từ ngoài vào để tái sử dụng
const props = defineProps({
  center: {
    type: Object as PropType<{ lat: number; lng: number }>,
    required: true,
  },
  zoom: {
    type: Number,
    default: 14,
  },
  height: {
    type: String,
    default: '500px',
  },
  width: {
    type: String,
    default: '100%',
  },
  showMarker: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <GoogleMap :api-key="API_KEY" :center="center" :zoom="zoom" :style="{ width, height }">
    <Marker v-if="showMarker" :options="{ position: center }" />
  </GoogleMap>
</template>
