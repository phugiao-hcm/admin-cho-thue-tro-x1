<template>
  <HaSection>
    <div>
      <el-button type="primary" @click="onDirectProjectCreate">Tạo phòng</el-button>
    </div>
  </HaSection>
</template>


<script lang="ts" setup>
import HaOffsetSection from '../../../components/global/HaSection.vue'
import { reactive, ref } from 'vue'
import type { FormItemProps, FormProps } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const onDirectProjectCreate = () => {
  // điều hướng bằng path
  router.push({ name: 'ProjectCreate' })
}
</script>