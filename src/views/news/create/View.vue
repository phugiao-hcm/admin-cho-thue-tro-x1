<template>
  <ha-offset-section :isHeaderCustom="true">
    <div class="flex-baseline wrap" style="margin-bottom: 16px">
      <div class="flex-center">
        <div>
          <el-link :underline="false" type="primary" @click="onBack()">
            <el-icon color="black" style="margin-right: 8px"><Back /></el-icon>
          </el-link>
        </div>
        <div>
          <p class="title2 neutral-900">Tạo Tin Tức mới</p>
        </div>
      </div>

      <div class="flex-center wrap">
        <el-button
          :loading="ui.isSubmitting"
          type="primary"
          size="large"
          @click="preHandleBeforeSubmit"
        >
          Tạo mới
        </el-button>
      </div>
    </div>

    <el-form :model="form" :rules="rules" ref="formRef">
      <div class="custom-flex">
        <div class="flex-left">
          <p class="body-medium-semi-bold neutral-700">Thông tin phòng</p>
          <p class="body-small-regular neutral-500">Thiết lập các thông tin cơ bản của phòng</p>
        </div>
        <div class="flex-right mobile-mt-sm">
          <div class="custom-card">
            <div>
              <p class="body-small-regular neutral-700">
                Tiêu đề bài viết (SEO H1)
                <span class="secondary-red-600">*</span>
              </p>
            </div>
            <div>
              <el-form-item prop="title">
                <el-input :placeholder="'Nhập tên cơ sở lưu trú'" v-model="form.title"></el-input>
              </el-form-item>
            </div>
          </div>

          <div class="custom-card">
            <div>
              <p class="body-small-regular neutral-700">
                Danh mục tin <span class="secondary-red-600">*</span>
              </p>
            </div>
            <div>
              <el-form-item prop="categoryId">
                <el-select
                  :loading="ui.isLoadingRoomBed"
                  class="w-100"
                  v-model="form.categoryId"
                  :placeholder="'Chọn danh mục tin'"
                  :loading-text="'Đang tải...'"
                  :no-data-text="'Không có dữ liệu'"
                >
                  <el-option
                    v-for="(item, index) in CATEGORY_NEWS_OPTIONS"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </div>

          <div class="custom-card">
            <div>
              <p class="body-small-regular neutral-700">Mô tả ngắn (meta description)</p>
            </div>
            <div>
              <el-form-item prop="shortDescription">
                <el-input
                  type="textarea"
                  :placeholder="'Nhập mô tả ngắn gọn'"
                  v-model="form.shortDescription"
                  rows="5"
                  maxlength="3000"
                  show-word-limit
                ></el-input>
              </el-form-item>
            </div>
          </div>

          <div class="custom-card">
            <div>
              <p class="body-small-regular neutral-700">Nội dung HTML / Markdown</p>
            </div>
            <div>
              <el-form-item prop="content">
                <el-input
                  type="textarea"
                  :placeholder="'Nhập mô tả ngắn gọn'"
                  v-model="form.content"
                  rows="5"
                  maxlength="3000"
                  show-word-limit
                ></el-input>
              </el-form-item>
            </div>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <!-- ================= TIỆN ÍCH VÀ HÌNH ẢNH ================= -->
      <div class="custom-flex">
        <div class="flex-left">
          <p class="body-medium-semi-bold neutral-700">Hình ảnh</p>
          <p class="body-small-regular neutral-500">
            Thêm hình ảnh để khách dễ dàng xem thêm thông tin phòng của bạn
          </p>
        </div>
        <div class="flex-right mobile-mt-sm">
          <div class="custom-card">
            <div>
              <p class="body-small-regular neutral-500">
                Thêm ảnh tin tức
                <span class="secondary-red-600">*</span>
              </p>
              <p class="body-small-regular neutral-500">
                Ảnh tin tức phải có định dạng JPG hoặc PNG, dung lượng không quá 3Mb.
              </p>
            </div>
          </div>

          <div class="custom-card">
            <el-form-item prop="photos">
              <div class="image-gallery">
                <div
                  class="image-box"
                  v-for="(image, index) in form.photos"
                  :key="image.id"
                  :class="{ active: index === 0 }"
                >
                  <el-image :src="image.url" class="image-preview" fit="cover" />
                  <span class="image-order body-extra-small-semi-bold neutral-800">{{
                    index + 1
                  }}</span>

                  <div class="image-actions">
                    <div>
                      <div>
                        <el-tooltip content="Đặt làm ảnh đại diện" placement="top">
                          <el-icon class="secondary-orange-600"><Star /></el-icon>
                        </el-tooltip>
                      </div>
                    </div>

                    <div>
                      <el-tooltip content="Xóa ảnh" placement="top">
                        <el-icon class="neutral-0" @click="deleteImage(image)"><Delete /></el-icon>
                      </el-tooltip>
                    </div>
                  </div>

                  <div v-if="index === 0" class="main-label flex-center">
                    <i class="el-icon-star-on secondary-orange-500" />
                    <p class="small-cap-small-cap secondary-orange-600">Ảnh đại diện</p>
                  </div>
                </div>

                <div>
                  <CropperFixed
                    ref="cropperFixedRef"
                    @onResult="resultThumbnail"
                    :width="1520"
                    :height="1180"
                    :typeUpload="'avatar-upload-custom'"
                  >
                    <div class="image-box add-image">
                      <el-icon><Plus /></el-icon>
                    </div>
                  </CropperFixed>
                </div>
              </div>
            </el-form-item>
          </div>
        </div>
      </div>
    </el-form>
  </ha-offset-section>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

import HaOffsetSection from '@/components/global/HaOffsetSection.vue'
import CropperFixed from '@/components/global/cropper-fixed/index.vue'
import { Back, Plus, Delete, Star } from '@element-plus/icons-vue'
import { CATEGORY_NEWS_OPTIONS } from '../const'
import { type CreatePostPayload } from './api'
import { useUI } from '@/mixins/globalMixin'
import { getTokenImage, uploadImage } from '@/apis/upload.ts'
import { createPhongTro } from './api'
import { getProvinces, getWards } from '@/apis/province'

const router = useRouter()
const { generateRandomSuffix, onResetValidateField, validateRequired } = useUI()

// Wrap validateRequired to callback style for async-validator
const validateRequiredCallback = (rule: any, value: any, callback: any) => {
  validateRequired(rule, value)
    .then(() => callback())
    .catch((err: any) => callback(err))
}

const validateOptionRequiredCallback = (rule: any, value: any, callback: any) => {
  if (!value || value.length === 0) {
    callback(new Error('Không bỏ trống'))
  } else {
    callback()
  }
}

const validateImagesRequiredCallback = (rule: any, value: any, callback: any) => {
  if (!form.photos || form.photos.length === 0) {
    callback(new Error('Không bỏ trống'))
  } else {
    callback()
  }
}

// refs
const formRef = ref<FormInstance>()
const cropperFixedRef = ref<InstanceType<typeof CropperFixed> | null>(null)

const provinces = ref<any>([])
const wards = ref<any>([])
const tokenImage = ref<any>({})

const ui = reactive({
  isSubmitting: false,
  isLoadingRoomView: false,
  isLoadingRoomBed: false,
  isLoadingFacility: false,
  isLoadingCancellationPolicySetupInfo: false,
  isLoadingProvinces: false,
  isLoadingWards: false,
})

const form = reactive<CreatePostPayload>({
  title: null,
  shortDescription: null,
  content: null,
  photos: [],
  categoryId: null,
})

const rules: FormRules = {
  title: [{ validator: validateRequiredCallback, trigger: ['blur'] }],
  shortDescription: [{ validator: validateRequiredCallback, trigger: ['blur'] }],
  content: [{ validator: validateRequiredCallback, trigger: ['blur'] }],
  photos: [{ validator: validateImagesRequiredCallback, trigger: ['blur', 'change'] }],
  categoryId: [{ validator: validateOptionRequiredCallback, trigger: ['blur', 'change'] }],
}

const getProvinceList = async () => {
  try {
    ui.isLoadingProvinces = true
    const { res } = await getProvinces()
    provinces.value = res.data
  } catch (e) {
    console.error(e)
  } finally {
    ui.isLoadingProvinces = false
  }
}
const getWardList = async (provinceSn: number) => {
  try {
    ui.isLoadingWards = true
    const { res } = await getWards(provinceSn)
    wards.value = res.data
  } catch (e) {
    console.error(e)
  } finally {
    ui.isLoadingWards = false
  }
}

const getTokenImg = async () => {
  try {
    tokenImage.value = await getTokenImage()
  } catch (e) {
    console.error(e)
  }
}

const uploadFileImg = async (image: File) => {
  try {
    const imageUpdated = await uploadImage(image, tokenImage.value)
    return imageUpdated
  } catch (e) {
    console.error(e)
  }
  return null
}

onMounted(() => {
  getProvinceList()
  getTokenImg()
})

const resultThumbnail = (result: File) => {
  const newImage = {
    file: result,
    url: URL.createObjectURL(result),
    fileName: `${generateRandomSuffix()}-${result.name}`,
    firstDisplay: 0,
  }
  if (form.photos.length < 11) {
    form.photos.push(newImage)
    onResetValidateField('photos')
  }
  onRefreshImage()
}

const deleteImage = (image: any) => {
  form.photos = form.photos.filter((img: any) => img.fileName !== image.fileName)
  onRefreshImage()
}

const onRefreshImage = () => {
  cropperFixedRef.value?.resetImage()
}

const onBack = () => {
  router.go(-1)
}

const preHandleBeforeSubmit = () => {
  formRef.value?.validate((valid) => {
    if (!valid) return
    onSubmit()
  })
}

const onSubmit = async () => {
  ui.isSubmitting = true
  try {
    const onlyFiles = form.photos.map((item) => item.file)
    if (onlyFiles.length > 0) {
      await uploadAll() // ✅ đợi upload xong rồi mới lưu
    }

    // gọi API lưu post khi đã có link ảnh
    form.photos = form.photos.map((path) => path.file.name)

    const id = await createPhongTro(form)

    if (id) {
      ElMessage({
        message: 'Thêm Tin tức mới thành công!',
        type: 'success',
      })
      router.push({ name: 'PostList' })
    }
  } catch (error) {
    alert('Có lỗi xảy ra: ' + error)
  } finally {
    ui.isSubmitting = false
  }
}

// Cập nhật list ảnh
const uploadAll = async () => {
  const onlyFiles = form.photos.map((item) => item.file)
  await Promise.all(onlyFiles.map((file) => uploadFileImg(file)))
}
</script>



<style lang="scss">
@use '../common/scss/create.scss';
</style>