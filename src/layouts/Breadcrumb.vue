<template>breadcrumb</template>
<!-- <template>
  <div class="flex-between">
    <div class="hidden-is-mobile">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item v-if="$route.meta.breadcrumb?.level_1">
          <span
            v-if="!$route.meta.breadcrumb.level_1.router_name"
            class="body-extra-small-regular neutral-600"
            >{{ setBreadcrumbLv1($route) }}</span
          >
          <a v-else @click="onDirectLv1($route)" class="body-extra-small-regular neutral-600">
            {{ setBreadcrumbLv1($route) }}
          </a>
        </el-breadcrumb-item>
        <el-breadcrumb-item v-if="$route.meta.breadcrumb?.level_2 && setBreadcrumbLv2($route)">
          <span
            v-if="!$route.meta.breadcrumb.level_2.router_name"
            class="body-extra-small-regular neutral-600"
            >{{ setBreadcrumbLv2($route) }}</span
          >
          <a v-else @click="onDirectLv2($route)" class="body-extra-small-regular neutral-600">
            {{ setBreadcrumbLv2($route) }}
          </a>
        </el-breadcrumb-item>
        <el-breadcrumb-item
          v-if="$route.meta.breadcrumb?.level_3"
          class="body-extra-small-regular neutral-600"
        >
          {{ setBreadcrumbLv3($route) }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    totalNotificationNotRead: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  data() {
    return {
      tab: 'booking', // Tab default
      ui: {
        isLoading: false,
        isNoMoreScroll: false,
        isEmptyPage: true,
        isOpenPopoverNotification: false,
      },
      notificationList: [],
      filter: {
        limit: 10,
        page: 1,
        childrenType: '0',
      },
    }
  },
  computed: {
    noMore() {
      return this.ui.isNoMoreScroll === true
    },
    disabled() {
      return this.ui.isLoading || this.noMore
    },
  },
  methods: {
    onDirectLv1(route) {
      this.$router.push({ name: route.meta.breadcrumb.level_1.router_name })
    },
    onDirectLv2(route) {
      const queryParams = {}
      for (const [key, value] of Object.entries(route.meta.breadcrumb.level_2.link)) {
        queryParams[key] = `${value}`
      }
      this.$router.push({
        name: route.meta.breadcrumb.level_2.router_name,
        query: queryParams,
      })
    },
    setBreadcrumbLv1(route) {
      if (!route.meta.breadcrumb.level_1.hard_code) {
        return route.meta.breadcrumb.level_1.name
      }
      return this.$t(`breadcrumb.${route.meta.breadcrumb.level_1.name}`)
    },
    setBreadcrumbLv2(route) {
      if (!route.meta.breadcrumb.level_2.hard_code) {
        if (
          route.meta.breadcrumb.level_2.name === 'all_hotels' ||
          route.meta.breadcrumb.level_2.name === 'all_hotel_bookings'
        ) {
          return this.$t(`breadcrumb.${route.meta.breadcrumb.level_2.name}`)
        }
        return route.meta.breadcrumb.level_2.name
      }
      return this.$t(`breadcrumb.${route.meta.breadcrumb.level_2.name}`)
    },
    setBreadcrumbLv3(route) {
      if (!route.meta.breadcrumb.level_3.hard_code) {
        return route.meta.breadcrumb.level_3.name
      }
      return this.$t(`breadcrumb.${route.meta.breadcrumb.level_3.name}`)
    },
  },
}
</script>

<style lang="scss" scoped>
:deep(.el-breadcrumb__separator) {
  margin: 0px 6px 0px 2px;
  font-weight: unset;
  color: var(--neutral-600);
}

:deep(.el-breadcrumb__item) {
  .el-breadcrumb__inner {
    color: var(--neutral-600, #475467);
    /* Body extra small/Regular */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  a {
    color: var(--neutral-600, #475467);
    /* Body extra small/Regular */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
}

.el-breadcrumb {
  display: flex;
  align-items: center;
  padding: 12px 0;
}

ul {
  list-style: unset;
  margin-left: 24px;
}

.dot-blue {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 2px;
  margin-left: 6px;
  margin-bottom: 3px;
  background: #1570ef;
}

.content {
  margin-right: 20px;
  margin-left: 20px;
}

:deep(.w-100) {
  .el-link--inner {
    width: 100%;
  }
}
</style> -->