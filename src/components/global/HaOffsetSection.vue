<template>
  <section class="section">
    <header class="section__header">
      <div v-if="title || description">
        <h1 v-if="title" class="section__title" v-text="title" />
        <p v-if="description" class="section__description" v-text="description" />
      </div>

      <!-- <el-row v-if="!isHeaderCustom && $route.meta.breadcrumb?.title">
        <div class="flex-center">
          <el-col :span="16" :offset="isMobile ? 1 : 4">
            <el-link :underline="false" type="primary" @click="onBack()">
              <span
                v-show="isAccountHotelGroup() && $route.name !== 'notification'"
                class="icon-arrow-left-2"
                style="margin-right: 8px"
              ></span>
            </el-link>
            <span class="title3 neutral-900">{{ setBreadcrumbTitle($route) }}</span>
          </el-col>
        </div>
      </el-row> -->
      <slot name="header" />
    </header>
    <div :class="{ 'is-mobile': isMobile }" class="section__body">
      <el-row>
        <el-col :span="isMobile ? 22 : 16" :offset="isMobile ? 1 : 4">
          <slot />
        </el-col>
      </el-row>
    </div>
    <div class="section__footer">
      <slot name="footer" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrueSection',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    isHeaderCustom: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    onBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  background-color: white;
  &__title {
    font-size: 16px;
    font-weight: 600;
    padding-top: 1em;
  }
  &__footer {
    margin: 12px 0;
  }
  &:not(:last-child) {
    margin-bottom: 36px;
  }

  .section__header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 1;
  }
}

.section__body {
  padding-bottom: calc(80px + env(safe-area-inset-bottom, 0));
}
</style>
