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

        <el-form
            :model="form"
            :rules="rules"
            ref="form"
            class="my-form"
            v-loading="ui.isLoadingCancellationPolicySetupInfo"
        >
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
                            <el-form-item prop="name">
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
                                <el-form-item prop="numOfRoomHotel">
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
                                <el-form-item prop="square">
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
                                <el-form-item prop="numOfRoomHotel">
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
                                <el-form-item prop="square">
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
                            <el-form-item prop="name">
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

                        <div style="margin-top: 12px">
                            <el-form-item>
                                <el-tag
                                    class="el-tag__square"
                                    style="margin: 0 12px 8px 0"
                                    :isDisabled="true"
                                    v-for="(item, index) in facilityListSelected"
                                    :key="index"
                                    :disable-transitions="false"
                                    closable
                                    @close="handleRemoveFacility(item, index)"
                                >
                                    <span class="body-small-regular primary-600">{{
                                        item.name
                                    }}</span>
                                </el-tag>
                            </el-form-item>
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
                                            <div v-if="!image.firstDisplay">
                                                <el-tooltip
                                                    :content="'room_type.set_as_default_image'"
                                                    placement="top"
                                                >
                                                    <i
                                                        class="el-icon-star-on"
                                                        :class="
                                                            image.firstDisplay
                                                                ? 'secondary-orange-600'
                                                                : 'neutral-0'
                                                        "
                                                        @click="setAsMain(image)"
                                                    />
                                                </el-tooltip>
                                            </div>
                                        </div>

                                        <div>
                                            <el-tooltip
                                                :content="'room_type.delete_image'"
                                                placement="top"
                                            >
                                                <i
                                                    class="el-icon-delete neutral-0"
                                                    @click="deleteImage(image)"
                                                />
                                            </el-tooltip>
                                        </div>
                                    </div>

                                    <div v-if="image.firstDisplay" class="main-label flex-center">
                                        <i class="el-icon-star-on secondary-orange-500" />
                                        <p class="small-cap-small-cap secondary-orange-600">
                                            'room_type.default_image
                                        </p>
                                    </div>
                                </div>

                                <!-- Thêm ảnh -->
                                <div>
                                    <CropperFixed
                                        ref="cropperFixedRef"
                                        @onResult="resultThumbnail"
                                        :width="1370"
                                        :height="930"
                                        :typeUpload="'avatar-upload-custom'"
                                    >
                                        <div class="image-box add-image">
                                            <i class="el-icon-plus" style="font-size: 26px"></i>
                                        </div>
                                    </CropperFixed>
                                </div>
                            </div>
                        </el-form-item>
                    </div>

                    <div class="custom-card">
                        <GoogleMap :center="center" :zoom="12" height="400px" width="100%" />
                    </div>
                </div>
            </div>
        </el-form>
    </ha-offset-section>
</template>


<script>
import HaOffsetSection from '@/components/global/HaOffsetSection.vue'
import InputNumber from '@/components/global/InputNumber.vue'
import InputRoundMoney from '@/components/global/InputRoundMoney.vue'
import GoogleMap from '@/components/global/GoogleMap.vue'
import CropperFixed from '@/components/global/cropper-fixed/index.vue'
import { Back } from '@element-plus/icons-vue'
import { TYPE_ROOM_OPTIONS, DIRECTION_ROOM_OPTIONS, FACILITY_ROOM_OPTIONS } from '../const'
import { addProject } from './api'

export default {
    name: 'CreateRoomType',
    components: {
        HaOffsetSection,
        InputNumber,
        InputRoundMoney,
        GoogleMap,
        CropperFixed,
        Back,
    },
    data(vm) {
        // const validateRequiredImages = (_rule, _value, callback) => {
        //     if (vm.form.imageList.length === 0) {
        //         callback(new Error('validation.required'))
        //     } else {
        //         callback()
        //     }
        // }

        return {
            TYPE_ROOM_OPTIONS,
            DIRECTION_ROOM_OPTIONS,
            FACILITY_ROOM_OPTIONS,

            center: { lat: 10.762622, lng: 106.660172 }, // Vị trí mặc định (TP.HCM)

            ui: {
                isSubmitting: false,
                isSubmittingDraft: false,

                isLoadingRoomView: false,
                isLoadingRoomBed: false,
                isLoadingFacility: false,
            },

            form: {
                hotelSn: this.$route.query.hotelSn ? Number(this.$route.query.hotelSn) : null,
                // Biến mới từ Thành
                nameAccommodation: null,
                numberOfRooms: null,
                area: null,
                fullName: null,
                roomType: null,
                viewRoom: null,
                description: null,
                facilities: null,
                price: null,
                address: null,
                imageList: [],

                latitude: null,
                longitude: null,
            },

            maxNumHourList: Array.from({ length: 13 }, (_, i) => i + 1),

            rules: {
                nameAccommodation: [
                    {
                        validator: vm.validateRequired,
                        trigger: ['blur'],
                    },
                ],
                numberOfRooms: [
                    {
                        validator: vm.validateRequired,
                        trigger: ['blur'],
                    },
                ],
                area: [
                    {
                        validator: vm.validateRequired,
                        trigger: ['blur'],
                    },
                ],
                fullName: [
                    {
                        validator: vm.validateRequired,
                        trigger: ['blur'],
                    },
                ],
                price: [
                    {
                        validator: vm.validateRequired,
                        trigger: ['blur'],
                    },
                ],
                roomType: [
                    {
                        validator: vm.validateRequired,
                        trigger: ['change'],
                    },
                ],
                address: [
                    {
                        validator: vm.validateRequired,
                        trigger: ['blur'],
                    },
                ],
                // imageList: [
                //     {
                //         validator: validateRequiredImages,
                //         trigger: ['blur', 'change'],
                //     },
                // ],
            },
        }
    },
    methods: {
        // ----------- START HANDLE IMAGE -----------
        setAsMain(image) {
            if (image) {
                this.form.imageList.forEach((img) => (img.firstDisplay = 0))
                image.firstDisplay = 1
            }

            // Kiểm tra xem có phần tử nào firstDisplay === true không
            const hasMain = this.form.imageList.some((img) => img.firstDisplay === 1)

            // Nếu không có phần tử nào có firstDisplay = true thì set cái đầu tiên thành true
            if (!hasMain && this.form.imageList.length > 0) {
                this.form.imageList[0].firstDisplay = 1
            }
        },
        resultThumbnail(result) {
            const newImage = {
                file: result,
                url: URL.createObjectURL(result),
                fileName: `${this.generateRandomSuffix()}-${result.name}`,
                firstDisplay: 0,
            }

            if (this.form.imageList.length < 11) {
                this.form.imageList.push(newImage)

                this.onResetValidateField('imageList')
            }

            this.onRefreshImage()
        },
        deleteImage(image) {
            this.form.imageList = this.form.imageList.filter(
                (img) => img.fileName !== image.fileName
            )

            this.onRefreshImage()
        },

        onRefreshImage() {
            this.setAsMain()
            this.$refs.cropperFixedRef.resetImage()
        },
        // ----------- END HANDLE IMAGE -----------

        onChangeNumOfRoomHotel(value) {
            this.form.numberOfRooms = value
        },
        onChangeSquare(value) {
            this.form.area = value
        },
        onChangePrice(value) {
            this.form.price = value
        },

        onBack() {
            this.$router.go(-1)
        },
        preHandleBeforeSubmit() {
            this.$refs.form.validate((valid) => {
                if (!valid) {
                    return false
                }
                this.onSubmit()
            })
        },

        async onSubmit() {
            this.ui.isSubmitting = true
            try {
                const id = await addProject(this.form)
                if (id) {
                    this.$router.push({ name: 'ProjectList' })
                }
            } catch (error) {
                alert('Có lỗi xảy ra: ' + error)
            } finally {
                this.ui.isSubmitting = false
            }
        },
    },
}
</script>

<style lang="scss">
@use '../common/scss/create.scss';
</style>