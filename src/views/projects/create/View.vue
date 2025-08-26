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
                    <p class="title2 neutral-900">Tạo Tin Đăng mới</p>
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
                    <p class="body-small-regular neutral-500">
                        Thiết lập các thông tin cơ bản của phòng
                    </p>
                </div>
                <div class="flex-right mobile-mt-sm">
                    <div class="custom-card">
                        <div>
                            <p class="body-small-regular neutral-700">
                                Tên cơ sở lưu trú
                                <span class="secondary-red-600">*</span>
                            </p>
                        </div>
                        <div>
                            <el-form-item prop="nameAccommodation">
                                <el-input
                                    :placeholder="'Nhập tên cơ sở lưu trú'"
                                    v-model="form.nameAccommodation"
                                ></el-input>
                            </el-form-item>
                        </div>
                    </div>

                    <div class="custom-card">
                        <div class="mt-12px flex-gap">
                            <div class="w-100">
                                <p class="body-small-regular neutral-700">
                                    Số lượng phòng
                                    <span class="secondary-red-600">*</span>
                                </p>
                                <el-form-item prop="numberOfRooms">
                                    <InputNumber
                                        :algin="'left'"
                                        :min="1"
                                        :max="100"
                                        :placeholder="'Nhập số lượng phòng'"
                                        :valueNumber="form.numberOfRooms"
                                        @onChange="onChangeNumOfRoomHotel"
                                    />
                                </el-form-item>
                            </div>
                            <div class="w-100">
                                <p class="body-small-regular neutral-700">
                                    Diện tích phòng
                                    <span class="secondary-red-600">*</span>
                                </p>
                                <el-form-item prop="area">
                                    <InputNumber
                                        :algin="'left'"
                                        :suffix="` m²`"
                                        :min="0"
                                        :max="9999"
                                        :placeholder="'Nhập diện tích phòng'"
                                        :valueNumber="form.area"
                                        @onChange="onChangeSquare"
                                    />
                                </el-form-item>
                            </div>
                        </div>
                    </div>

                    <div class="custom-card">
                        <div class="mt-12px flex-gap">
                            <div class="w-100">
                                <p class="body-small-regular neutral-700">
                                    Họ và tên người đại diện
                                    <span class="secondary-red-600">*</span>
                                </p>
                                <el-form-item prop="fullName">
                                    <el-input
                                        :placeholder="'Nhập số lượng phòng'"
                                        v-model="form.fullName"
                                    ></el-input>
                                </el-form-item>
                            </div>
                            <div class="w-100">
                                <p class="body-small-regular neutral-700">
                                    Giá thuê phòng
                                    <span class="secondary-red-600">*</span>
                                </p>
                                <el-form-item prop="price">
                                    <InputRoundMoney
                                        :suffix="'/1 tháng'"
                                        :algin="'left'"
                                        placeholder="Nhập giá thuê phòng"
                                        v-model="form.price"
                                        @onChange="onChangePrice"
                                    />
                                </el-form-item>
                            </div>
                        </div>
                    </div>

                    <div class="custom-card">
                        <div>
                            <p class="body-small-regular neutral-700">
                                Loại phòng <span class="secondary-red-600">*</span>
                            </p>
                        </div>
                        <div>
                            <el-form-item>
                                <el-select
                                    :loading="ui.isLoadingRoomBed"
                                    class="w-100"
                                    v-model="form.roomType"
                                    :placeholder="'Chọn loại phòng'"
                                    :loading-text="'Đang tải...'"
                                    :no-data-text="'Khong có dữ liệu'"
                                >
                                    <el-option
                                        v-for="(item, index) in TYPE_ROOM_OPTIONS"
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
                            <p class="body-small-regular neutral-700">Hướng phòng</p>
                        </div>
                        <div>
                            <el-form-item>
                                <el-select
                                    :loading="ui.isLoadingRoomView"
                                    class="w-100"
                                    v-model="form.viewRoom"
                                    :placeholder="'Chọn hướng phòng'"
                                    :loading-text="'message.loading'"
                                    :no-data-text="'no_data'"
                                >
                                    <el-option
                                        v-for="(item, index) in DIRECTION_ROOM_OPTIONS"
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
                            <p class="body-small-regular neutral-700">
                                Địa chỉ
                                <span class="secondary-red-600">*</span>
                            </p>
                        </div>
                        <div>
                            <el-form-item prop="address">
                                <el-input
                                    :placeholder="'Nhập địa chỉ'"
                                    v-model="form.address"
                                ></el-input>
                            </el-form-item>
                        </div>
                    </div>

                    <div class="custom-card">
                        <div>
                            <p class="body-small-regular neutral-700">Mô tả phòng</p>
                        </div>
                        <div>
                            <el-form-item>
                                <el-input
                                    type="textarea"
                                    :placeholder="'Nhập mô tả ngắn gọn'"
                                    v-model="form.description"
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
                    <p class="body-medium-semi-bold neutral-700">Tiện ích và hình ảnh</p>
                    <p class="body-small-regular neutral-500">
                        Thêm tiện ích và hình ảnh để khách dễ dàng lựa chọn phòng của bạn
                    </p>
                </div>
                <div class="flex-right mobile-mt-sm">
                    <div class="custom-card">
                        <div>
                            <p class="body-small-regular neutral-700">Thêm tiện ích</p>
                            <div>
                                <el-select
                                    :loading="ui.isLoadingRoomBed"
                                    class="w-100"
                                    multiple
                                    v-model="form.facilities"
                                    :placeholder="'Chọn tiên ích'"
                                    :loading-text="'Đang tải...'"
                                    :no-data-text="'Khong có dữ liệu'"
                                >
                                    <el-option
                                        v-for="(item, index) in FACILITY_ROOM_OPTIONS"
                                        :key="index"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </div>

                    <div class="custom-card">
                        <div>
                            <p class="body-small-regular neutral-500">
                                Thêm ảnh phòng
                                <span class="secondary-red-600">*</span>
                            </p>
                            <p class="body-small-regular neutral-500">
                                Ảnh phòng phải có định dạng JPG hoặc PNG, dung lượng không quá 3Mb.
                            </p>
                        </div>
                    </div>

                    <div class="custom-card">
                        <el-form-item prop="imageList">
                            <div class="image-gallery">
                                <div
                                    class="image-box"
                                    v-for="(image, index) in form.imageList"
                                    :key="image.id"
                                    :class="{ active: image.firstDisplay }"
                                >
                                    <el-image :src="image.url" class="image-preview" fit="cover" />
                                    <span
                                        class="image-order body-extra-small-semi-bold neutral-800"
                                        >{{ index + 1 }}</span
                                    >

                                    <div class="image-actions">
                                        <div>
                                            <div>
                                                <el-tooltip
                                                    content="Đặt làm ảnh đại diện"
                                                    placement="top"
                                                >
                                                    <el-icon
                                                        class="secondary-orange-600"
                                                        @click="setAsMain(image)"
                                                        ><Star
                                                    /></el-icon>
                                                </el-tooltip>
                                            </div>
                                        </div>

                                        <div>
                                            <el-tooltip content="Xóa ảnh" placement="top">
                                                <el-icon
                                                    class="neutral-0"
                                                    @click="deleteImage(image)"
                                                    ><Delete
                                                /></el-icon>
                                            </el-tooltip>
                                        </div>
                                    </div>

                                    <div v-if="image.firstDisplay" class="main-label flex-center">
                                        <i class="el-icon-star-on secondary-orange-500" />
                                        <p class="small-cap-small-cap secondary-orange-600">
                                            Ảnh đại diện
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <CropperFixed
                                        ref="cropperFixedRef"
                                        @onResult="resultThumbnail"
                                        :width="1370"
                                        :height="930"
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

                    <div>
                        <!-- <gmap-autocomplete
                            placeholder="Tìm vị trí..."
                            class="el-input__inner"
                            @place_changed="handleChangePlace"
                        >
                        </gmap-autocomplete> -->
                    </div>
                    <div class="custom-card">
                        <!-- <GoogleMap :center="center" :zoom="12" height="400px" width="100%" /> -->
                        <!-- <BaseMap @update:location="onLocationChange" /> -->
                        <GoogleMapWithAutocomplete />
                    </div>
                </div>
            </div>
        </el-form>
    </ha-offset-section>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'

import HaOffsetSection from '@/components/global/HaOffsetSection.vue'
import InputNumber from '@/components/global/InputNumber.vue'
import InputRoundMoney from '@/components/global/InputRoundMoney.vue'
import CropperFixed from '@/components/global/cropper-fixed/index.vue'
import { Back, Plus, Delete, Star } from '@element-plus/icons-vue'
import { TYPE_ROOM_OPTIONS, DIRECTION_ROOM_OPTIONS, FACILITY_ROOM_OPTIONS } from '../const'
import { addProject } from './api'
import { useUI } from '@/mixins/globalMixin'
import GoogleMapWithAutocomplete from '@/components/global/GoogleMap.vue'

const router = useRouter()
const route = useRoute()
const { generateRandomSuffix, onResetValidateField, validateRequired } = useUI()

// Wrap validateRequired to callback style for async-validator
const validateRequiredCallback = (rule: any, value: any, callback: any) => {
    validateRequired(rule, value)
        .then(() => callback())
        .catch((err: any) => callback(err))
}

// refs
const formRef = ref<FormInstance>()
const cropperFixedRef = ref<InstanceType<typeof CropperFixed> | null>(null)

const ui = reactive({
    isSubmitting: false,
    isLoadingRoomView: false,
    isLoadingRoomBed: false,
    isLoadingFacility: false,
    isLoadingCancellationPolicySetupInfo: false,
})

interface ProjectForm {
    hotelSn: number | null
    nameAccommodation: string | null
    numberOfRooms: number | null
    area: number | null
    fullName: string | null
    roomType: string | null
    viewRoom: string | null
    description: string | null
    facilities: string[]
    price: number | null
    address: string | null
    imageList: any[]
    latitude: number | null
    longitude: number | null
}

const form = reactive<ProjectForm>({
    hotelSn: route.query.hotelSn ? Number(route.query.hotelSn) : null,
    nameAccommodation: null,
    numberOfRooms: null,
    area: null,
    fullName: null,
    roomType: null,
    viewRoom: null,
    description: null,
    facilities: [],
    price: null,
    address: null,
    imageList: [],
    latitude: null,
    longitude: null,
})

const rules: FormRules = {
    nameAccommodation: [{ validator: validateRequiredCallback, trigger: ['blur'] }],
    numberOfRooms: [{ validator: validateRequiredCallback, trigger: ['blur'] }],
    area: [{ validator: validateRequiredCallback, trigger: ['blur'] }],
    fullName: [{ validator: validateRequiredCallback, trigger: ['blur'] }],
    price: [{ validator: validateRequiredCallback, trigger: ['blur'] }],
    roomType: [{ validator: validateRequiredCallback, trigger: ['change'] }],
    address: [{ validator: validateRequiredCallback, trigger: ['blur'] }],
    imageList: [{ validator: validateRequiredCallback, trigger: ['blur', 'change'] }],
}

const setAsMain = (image?: any) => {
    form.imageList.forEach((img: any) => (img.firstDisplay = 0))
    if (image) image.firstDisplay = 1
    if (!form.imageList.some((img: any) => img.firstDisplay === 1) && form.imageList.length > 0) {
        form.imageList[0].firstDisplay = 1
    }
}

const resultThumbnail = (result: File) => {
    const newImage = {
        file: result,
        url: URL.createObjectURL(result),
        fileName: `${generateRandomSuffix()}-${result.name}`,
        firstDisplay: 0,
    }
    console.log('aaa :', form)
    if (form.imageList.length < 11) {
        form.imageList.push(newImage)
        onResetValidateField('imageList')
    }
    onRefreshImage()
}

const deleteImage = (image: any) => {
    form.imageList = form.imageList.filter((img: any) => img.fileName !== image.fileName)
    onRefreshImage()
}

const onRefreshImage = () => {
    setAsMain()
    cropperFixedRef.value?.resetImage()
}

const onChangeNumOfRoomHotel = () => {}
const onChangeSquare = () => {}
const onChangePrice = () => {}

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
        const id = await addProject(form)
        if (id) {
            router.push({ name: 'ProjectList' })
        }
    } catch (error) {
        alert('Có lỗi xảy ra: ' + error)
    } finally {
        ui.isSubmitting = false
    }
}
</script>



<style lang="scss">
@use '../common/scss/create.scss';
</style>