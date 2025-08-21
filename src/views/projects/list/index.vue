<template>
  <HaSection>
    <div class="flex-between" style="margin: 16px 0">
      <p>Danh sách loại phòng</p>

      <div class="flex-center">
        <div>
          <el-input v-model="filter.keyword" style="width: 240px" placeholder="Please input" />
        </div>
        <div>
          <el-button type="primary" @click="onDirectProjectCreate">Tạo phòng</el-button>
        </div>
      </div>
    </div>

    <div class="el-table-outer">
      <el-table
        :data="tableData"
        :header-cell-style="{
          background: '#F9FAFB',
          borderBottom: '1px solid #D0D5DD',
          paddingTop: '10px',
          paddingBottom: '10px',
        }"
      >
        <el-table-column min-width="220">
          <template #header>
            <p class="body-small-semi-bold neutral-500">Tiêu đề</p>
          </template>
          <template #default="scope">
            <p class="body-small-regular neutral-600">
              {{ scope.row.date }}
            </p>
          </template>
        </el-table-column>
        <el-table-column min-width="220">
          <template #header>
            <p class="body-small-semi-bold neutral-500">Name</p>
          </template>
          <template #default="scope">
            <p class="body-small-regular neutral-600">
              {{ scope.row.name }}
            </p>
          </template>
        </el-table-column>
        <el-table-column min-width="220">
          <template #header>
            <p class="body-small-semi-bold neutral-500">Địa chỉ</p>
          </template>
          <template #default="scope">
            <p class="body-small-regular neutral-600">
              {{ scope.row.address }}
            </p>
          </template>
        </el-table-column>
      </el-table>

      <Pagination
        v-show="tableData.length !== 0"
        ref="paginationRef"
        :pageSizes="[10, 20, 30, 50]"
        @changePageSize="handleSizeChange"
        @changeCurrentPage="handleCurrentChange"
      />
    </div>
  </HaSection>
</template>


<script lang="ts" setup>
import HaSection from '../../../components/global/HaSection.vue'
import { reactive, ref } from 'vue'
import type { FormItemProps, FormProps } from 'element-plus'
import { useRouter } from 'vue-router'
import Pagination from '../../../components/global/PaginationMobile.vue'

const router = useRouter()

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const filter = reactive({
  page: 1,
  limit: 10,
  keyword: '',
})

const getRoomTypeList = () => {
  console.log('getRoomTypeList')
}

const handleSizeChange = (value: any) => {
  filter.page = 1
  filter.limit = value
  if (filter.page === 1) {
    getRoomTypeList()
  }
}
const handleCurrentChange = (value: any) => {
  filter.page = value
  getRoomTypeList()
}

const onDirectProjectCreate = () => {
  // điều hướng bằng path
  router.push({ name: 'ProjectCreate' })
}
</script>