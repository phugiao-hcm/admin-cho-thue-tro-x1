<template>
  <el-pagination
    :class="ui.isResponsiveMobile ? 'flex' : 'flex justify-flex-end'"
    background
    :layout="ui.isResponsiveMobile ? 'prev, next' : 'prev, pager, next'"
    :total="pagination.total"
    :page-size.sync="pagination.perPage"
    :current-page="pagination.currentPage"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
</template>

<script>
export default {
  name: "PaginationMobile",
  props: {
    pageSizes: {
      type: Array(),
      default: [10, 20, 30, 50],
    },
    layout: {
      type: String,
      default: "slot, prev, pager, next",
    },
  },
  data() {
    return {
      pagination: {
        total: 1,
        perPage: 10,
        currentPage: 1,
      },
    };
  },
  methods: {
    fetchMetaPagination(pagination) {
      this.pagination = pagination;
    },
    handleSizeChange(size) {
      this.pagination.currentPage = 1;
      this.$emit("changePageSize", size);
    },
    handleCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage;
      this.$emit("changeCurrentPage", currentPage);
    },
  },
};
</script>