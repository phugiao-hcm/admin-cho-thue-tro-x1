<template>
  <div class="left-section-sidebar">
    <div class="flex-center custom-logo" :class="isCollapse ? 'justify-center' : 'justify-between'">
      <img
        :class="!isCollapse ? '' : 'display-none'"
        class="logo-big"
        src="../../assets/images/svg/g2j-logo.svg"
        width="86px"
      />
      <span
        class="cursor-icon"
        :class="isCollapse ? 'icon-arrow-right' : 'icon-arrow-left'"
        @click="changeCollapse"
      ></span>
      <el-button @click="changeCollapse">v1</el-button>
    </div>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <router-link to="#">
        <el-menu-item index="homepage">
          <el-icon><icon-menu /></el-icon>
          <template #title><span>Trang chủ</span></template>
        </el-menu-item>
      </router-link>
      <router-link to="#">
        <el-menu-item index="projects">
          <el-icon><icon-menu /></el-icon>
          <template #title><span>Dự án</span></template>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(true)
// khai báo emit
const emit = defineEmits<{
  (e: 'collapsed'): void
}>()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// hàm emit sự kiện
const changeCollapse = () => {
  isCollapse.value = !isCollapse.value

  emit('collapsed')
}
</script>


<style lang="scss" scoped>
.el-menu--collapse > .el-menu-item span,
.el-menu--collapse > .el-submenu > .el-submenu__title [class^='icon-'] {
  overflow: unset;
  visibility: unset;
  height: 40px !important;
  line-height: 40px !important;
}

.el-menu--collapse {
  width: 64px !important;

  .el-menu-item {
    margin: unset;
  }
}

.el-menu-vertical-demo {
  background: var(--neutral-50);
  width: 240px;
  overflow-y: auto;
  border: none;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    display: none;
  }
}

a {
  text-decoration: none;
}

:deep(.el-submenu__title):hover {
  background: var(--neutral-100);
}
:deep(.el-menu-item-group__title) {
  display: none !important;
}
</style>
