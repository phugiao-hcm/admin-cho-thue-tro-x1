<template>
    <div class="map-container">
        <!-- Input autocomplete -->
        <input
            ref="autocompleteInput"
            type="text"
            placeholder="Nhập vị trí..."
            class="autocomplete-input"
        />

        <!-- Map -->
        <div ref="mapRef" class="map"></div>
    </div>
</template>

<!-- <script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGoogleMaps } from '@/composables/useGoogleMaps.ts'

const apiKey = 'AIzaSyD2_kkzvfEJmLHoOV4ok9LfdoaNxTFcGac' // 🔑 thay bằng key thật

const mapRef = ref<HTMLDivElement | null>(null)
const autocompleteInput = ref<HTMLInputElement | null>(null)

const { loadScript } = useGoogleMaps(apiKey)

onMounted(async () => {
    await loadScript()

    if (!mapRef.value || !autocompleteInput.value) return

    // Khởi tạo Map
    const map = new google.maps.Map(mapRef.value, {
        center: { lat: 10.762622, lng: 106.660172 }, // Hồ Chí Minh
        zoom: 13,
    })

    // Khởi tạo Autocomplete
    const autocomplete = new google.maps.places.Autocomplete(autocompleteInput.value, {
        fields: ['geometry', 'formatted_address'],
    })

    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        if (!place.geometry || !place.geometry.location) return

        map.setCenter(place.geometry.location)
        new google.maps.Marker({
            position: place.geometry.location,
            map,
        })
    })
})
</script> -->

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGoogleMaps } from '@/composables/useGoogleMaps.ts'

const apiKey = 'AIzaSyD2_kkzvfEJmLHoOV4ok9LfdoaNxTFcGac' // 🔑 thay bằng key thật

const mapRef = ref<HTMLDivElement | null>(null)
const autocompleteInput = ref<HTMLInputElement | null>(null)

const { loadScript } = useGoogleMaps(apiKey)

// Emit event lên component cha
const emit = defineEmits<{ (e: 'update:location', location: { lat: number; lng: number }): void }>()

onMounted(async () => {
    await loadScript()

    if (!mapRef.value || !autocompleteInput.value) return

    const map = new google.maps.Map(mapRef.value, {
        center: { lat: 10.762622, lng: 106.660172 },
        zoom: 13,
    })

    const autocomplete = new google.maps.places.Autocomplete(autocompleteInput.value, {
        fields: ['geometry', 'formatted_address'],
    })

    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()

        console.log('1231231 :', place.address_components)
        if (!place.geometry || !place.geometry.location) return

        const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        }

        map.setCenter(place.geometry.location)
        new google.maps.Marker({
            position: place.geometry.location,
            map,
        })

        // Emit lên component cha
        emit('update:location', location)
    })
})
</script>


<style scoped>
.map-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.autocomplete-input {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 6px;
}
.map {
    width: 100%;
    height: 400px;
    border-radius: 8px;
}
</style>
