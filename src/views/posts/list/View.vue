<template>
  <HaSection>
    <div class="flex-between" style="margin: 16px 0">
      <p class="body-large-semi-bold neutral-700">Danh sách Tin đăng</p>

      <div class="flex-center">
        <div>
          <el-input v-model="filter.keyword" style="width: 240px" placeholder="Nhập tìm kiếm..." />
        </div>
        <div>
          <el-button type="primary" @click="onDirectProjectCreate">Tạo Tin đăng</el-button>
        </div>
      </div>
    </div>

    <div class="radio-group-outer" style="margin: 16px 0">
      <el-radio-group v-model="filter.keyword" @change="onChangeTab">
        <el-radio-button label=""
          ><span>Tất cả</span>
          <span class="custom-num"> 10</span>
        </el-radio-button>
        <el-radio-button :label="PROJECT_STATUS.PENDING"
          ><span>Đang chờ xử lý </span>
          <span class="custom-num"> 2</span>
        </el-radio-button>
        <el-radio-button :label="PROJECT_STATUS.APPROVED"
          ><span>Đã duyệt </span>
          <span class="custom-num"> 2</span>
        </el-radio-button>
        <el-radio-button :label="PROJECT_STATUS.REJECTED"
          ><span>Bị từ chối </span>
          <span class="custom-num"> 2</span>
        </el-radio-button>
      </el-radio-group>
    </div>

    <div class="el-table-outer">
      <el-table
        v-loading="ui.isLoading"
        :data="tableData"
        :header-cell-style="{
          background: '#F9FAFB',
          borderBottom: '1px solid #D0D5DD',
          paddingTop: '10px',
          paddingBottom: '10px',
        }"
      >
        <el-table-column min-width="130">
          <template #header>
            <p class="body-small-semi-bold neutral-500">Ảnh đại diện</p>
          </template>
          <template #default="scope">
            <el-image
              :src="scope.row?.imageList?.[0]?.imagePath || ''"
              style="width: 100px"
              fit="cover"
            />
          </template>
        </el-table-column>
        <el-table-column min-width="220">
          <template #header>
            <p class="body-small-semi-bold neutral-500">Tiêu đề</p>
          </template>
          <template #default="scope">
            <el-link
              type="primary"
              underline="never"
              @click="onDirectProjectDetail(scope.row.id)"
              >{{ scope.row.nameAccommodation }}</el-link
            >
          </template>
        </el-table-column>
        <el-table-column min-width="160">
          <template #header>
            <p class="body-small-semi-bold neutral-500">Giá (/1 phòng)</p>
          </template>
          <template #default="scope">
            <p class="body-small-regular neutral-600">
              {{ formatPrice(scope.row.price) }}
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
        <el-table-column min-width="220">
          <template #header>
            <p class="body-small-semi-bold neutral-500">Tiện ích</p>
          </template>
          <template #default="scope">
            <p class="body-small-regular neutral-600">
              {{ scope.row.facilities ? scope.row.facilities[0] : '' }}
            </p>
          </template>
        </el-table-column>
        <el-table-column min-width="220">
          <template #header>
            <p class="body-small-semi-bold neutral-500">Mô tả</p>
          </template>
          <template #default="scope">
            <el-tooltip :content="scope.row.description" placement="top" effect="dark">
              <p class="body-small-regular neutral-600 text-hidden-2">
                {{ scope.row.description }}
              </p>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column min-width="220">
          <template #header>
            <p class="body-small-semi-bold neutral-500">Trạng thái</p>
          </template>
          <template #default="scope">
            <el-tag :type="setTypeStatus(scope.row.status)">
              {{ setStatus(scope.row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column min-width="160" align="center" fixed="right">
          <template #default="scope">
            <el-popover placement="left-start" :width="200" trigger="click">
              <template #reference>
                <el-button type="primary" plain>Thao tác</el-button>
              </template>

              <div class="el-popover_item">
                <div>
                  <el-button link type="primary" @click="onDirectProjectEdit(scope.row.status)">
                    <el-icon><EditPen /></el-icon>
                    <span>Chỉnh sửa</span>
                  </el-button>
                </div>
                <div>
                  <el-button link type="danger" @click="onProjectRemove(scope.row)">
                    <el-icon><CircleCloseFilled /></el-icon>
                    <span>Ngừng kinh doanh</span>
                  </el-button>
                </div>
              </div>
            </el-popover>
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

    <!-- =================== -->
    <PopupRemove ref="dialogRef" />
    <!-- =================== -->
  </HaSection>
</template>


<script lang="ts" setup>
import HaSection from '@/components/global/HaSection.vue'
import { reactive, ref, onMounted } from 'vue'
import type { FormItemProps, FormProps } from 'element-plus'
import { useRouter } from 'vue-router'
import Pagination from '@/components/global/PaginationMobile.vue'
import { getPostList } from './api'
import { PROJECT_STATUS } from '../const'
import { EditPen, CircleCloseFilled } from '@element-plus/icons-vue'
import { usePage } from '../mixin'
const { setStatus, setTypeStatus } = usePage()
import { useUI } from '@/mixins/globalMixin'
const { formatPrice } = useUI()
import PopupRemove from '../components/PopupRemove.vue'

const router = useRouter()

const tableData = ref<any>([])

const ui = reactive({
  isLoading: false,
})

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

const fetchPosts = async () => {
  try {
    ui.isLoading = true
    tableData.value = await getPostList()
    console.log('tableData :', tableData)
  } catch (e) {
    console.error(e)
  } finally {
    ui.isLoading = false
  }
}

onMounted(() => {
  fetchPosts()
})

const onDirectProjectCreate = () => {
  router.push({ name: 'ProjectCreate' })
}

const onChangeTab = () => {}
const onDirectProjectEdit = (value: number) => {
  console.log('onDirectProjectEdit :', value)
}

const dialogRef = ref<any>(null)
const onProjectRemove = (row: any) => {
  dialogRef.value?.open(row)
}

const onDirectProjectDetail = (id: any) => {
  router.push({ name: 'ProjectDetail', params: { id } })
}
</script>


<style lang="scss" scoped>
.el-popover_item {
  div {
    margin: 4px 0;
  }
}
</style>