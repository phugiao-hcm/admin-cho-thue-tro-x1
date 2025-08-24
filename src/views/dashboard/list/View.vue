<template>
    <HaSection>
        <div>Profile 2</div>
    </HaSection>
</template>

<script lang="ts" setup>
import HaSection from '@/components/global/HaSection.vue'
import { onMounted } from 'vue'

onMounted(() => {
    console.log('Profile 2 component mounted')
})
</script>