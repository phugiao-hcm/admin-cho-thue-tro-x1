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
                    <p class="title2 neutral-900">Tạo phòng mới</p>
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
                                Tiêu đề
                                <span class="secondary-red-600">*</span>
                            </p>
                        </div>
                        <div>
                            <el-form-item prop="name">
                                <el-input
                                    :placeholder="'Nhập tiêu đề'"
                                    v-model="form.name"
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
                                        :valueNumber="form.numOfRoomHotel"
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
                                        :valueNumber="form.square"
                                        @onChange="onChangeSquare"
                                    />
                                </el-form-item>
                            </div>
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
                                    v-model="form.name"
                                ></el-input>
                            </el-form-item>
                        </div>
                    </div>

                    <div class="custom-card">
                        <div>
                            <p class="body-small-regular neutral-700">Loại phòng</p>
                        </div>
                        <div>
                            <el-form-item>
                                <el-select
                                    :loading="ui.isLoadingRoomBed"
                                    class="w-100"
                                    v-model="form.roomBedTypeSnList"
                                    multiple
                                    :placeholder="'Chọn loại phòng'"
                                    :loading-text="'message.loading'"
                                    :no-data-text="'no_data'"
                                >
                                    <el-option
                                        v-for="item in roomBedTypeList"
                                        :key="item.sn"
                                        :label="item.name"
                                        :value="item.sn"
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
                                    v-model="form.roomViewSnList"
                                    multiple
                                    :placeholder="'Chọn hướng phòng'"
                                    :loading-text="'message.loading'"
                                    :no-data-text="'no_data'"
                                >
                                    <el-option
                                        v-for="item in roomViewList"
                                        :key="item.sn"
                                        :label="item.name"
                                        :value="item.sn"
                                    >
                                    </el-option>
                                </el-select>
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
                                    v-model="form.memo"
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
                        <div class="flex-between">
                            <p class="body-small-regular neutral-700">Thêm tiện ích</p>

                            <el-select
                                style="width: 30%"
                                v-model="facilitySnSelected"
                                filterable
                                remote
                                reserve-keyword
                                :placeholder="'Chọn tiện ích'"
                                :loading-text="'message.loading'"
                                :no-data-text="'no_data'"
                                :remote-method="searchHotelGroups"
                                :loading="ui.isLoadingFacility"
                                clearable
                                @change="onAddFacilityList"
                            >
                                <template #prefix>
                                    <el-icon>
                                        <Search />
                                    </el-icon>
                                </template>
                                <el-option
                                    class="style-staff-hotel-list"
                                    v-for="item in facilityList"
                                    :key="item.sn"
                                    :label="item.name"
                                    :value="item"
                                >
                                </el-option>
                            </el-select>
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
                                <!-- <div v-show="form.imageList.length < 11"> -->
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
            <el-divider></el-divider>
            <!-- ================= GIÁ PHÒNG ================= -->
            <div class="custom-flex">
                <div class="flex-left">
                    <el-form-item prop="policyContent">
                        <p class="body-medium-semi-bold neutral-700">Giá phòng</p>
                        <p class="body-small-regular neutral-500">
                            Thiết lập giá phòng phù hợp với mục tiêu kinh doanh của bạn
                        </p>
                    </el-form-item>
                </div>
                <div class="flex-right mobile-mt-sm">
                    <!-- ================= THEO GIỜ ================= -->
                    <!-- <div class="custom-card">
            <div class="my-8px mobile-mt-sm">
              <div class="custom-flex">
                <div class="flex-1">
                  <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                      <div class="flex-between wrap">
                        <p class="body-small-regular neutral-700">Giá phòng</p>
                        <p>
                          <el-checkbox v-model="isHourlyBooking" @change="onChangeHourlyBooking">{{
                            'room_type.not_in_business'
                          }}</el-checkbox>
                        </p>
                      </div>
                    </div>

                    <div class="mt-12px">
                      <p class="body-small-regular neutral-700 flex-center">
                        Giá phòng
                        <el-tooltip
                          :content="'room_type.exceed_maximum_hours_note'"
                          placement="bottom-start"
                          effect="dark"
                        >
                          <span class="icon-error primary-600"></span>
                        </el-tooltip>
                        <span class="secondary-red-600">*</span>
                      </p>
                      <div class="w-100">
                        <el-form-item prop="maxNumHour">
                          <el-select
                            :disabled="isDisabledHourly"
                            class="w-100"
                            v-model="form.maxNumHour"
                            :placeholder="'room_type.maximum_booking_hours'"
                            :loading-text="'message.loading'"
                            :no-data-text="'no_data'"
                          >
                            <el-option
                              v-for="item in maxNumHourList"
                              :key="item"
                              :label="`${item}h`"
                              :value="item"
                            >
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>

                    <div class="custom-row-grid mt-12px">
                      <div>
                        <p class="body-small-regular neutral-700">
                          Giá điện / 1kw
                          <span class="secondary-red-600">*</span>
                        </p>
                        <div>
                          <div class="w-100">
                            <el-form-item prop="priceFirstHours">
                              <InputRoundMoney
                                :disabled="isDisabledHourly"
                                :algin="'left'"
                                :suffix="'/1kw'"
                                :placeholder="'Nhập giá điện'"
                                v-model="form.priceFirstHours"
                              />
                            </el-form-item>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p class="body-small-regular neutral-700">
                          Giá nước / 1m³
                          <span class="secondary-red-600">*</span>
                        </p>
                        <div class="w-100">
                          <el-form-item prop="firstHours">
                            <InputRoundMoney
                              :disabled="isDisabledHourly"
                              :algin="'left'"
                              :suffix="'/1m³'"
                              :placeholder="'Nhập giá nước'"
                              v-model="form.priceFirstHours"
                            />
                          </el-form-item>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </div> -->
                </div>
            </div>
        </el-form>
    </ha-offset-section>
</template>


<script lang="js">
import HaOffsetSection from '@/components/global/HaOffsetSection.vue'
import InputNumber from '@/components/global/InputNumber.vue'
// import InputRoundMoney from '@/components/global/InputRoundMoney.vue'
import GoogleMap from '@/components/global/GoogleMap.vue'
import CropperFixed from '@/components/global/cropper-fixed/index.vue'
import {Back} from '@element-plus/icons-vue'

export default {
  name: 'CreateRoomType',
  components: {
    HaOffsetSection,
    InputNumber,
    // InputRoundMoney,
    GoogleMap,
    CropperFixed,
    Back,
  },
  data(vm) {
    const validateRequiredImages = (_rule, _value, callback) => {
      if (vm.form.imageList.length === 0) {
        callback(new Error('validation.required'))
      } else {
        callback()
      }
    }

    const validateRequiredHourFirstPrice = (_rule, _value, callback) => {
      if (vm.form.hourlyBooking && !vm.form.priceFirstHours) {
        callback(new Error('validation.required'))
      } else {
        callback()
      }
    }

    const validateRequiredHourFirst = (_rule, _value, callback) => {
      if (vm.form.hourlyBooking && !vm.form.firstHours) {
        callback(new Error('validation.required'))
      } else {
        callback()
      }
    }
    const validateRequiredAdditionalHours = (_rule, _value, callback) => {
      if (vm.form.additionalHours === 0) {
        callback(new Error('validation.invalid_value'))
      } else {
        callback()
      }
    }
    const validateRequiredOvernightPrice = (_rule, _value, callback) => {
      if (vm.form.overnightBooking && !vm.form.priceOvernight) {
        callback(new Error('validation.required'))
      } else {
        callback()
      }
    }

    const validateRequiredDailyPrice = (_rule, _value, callback) => {
      if (vm.form.dailyBooking && !vm.form.priceOneDay) {
        callback(new Error('validation.required'))
      } else {
        callback()
      }
    }

    const validateRequiredMaxNumHour = (_rule, _value, callback) => {
      if (vm.form.hourlyBooking && !vm.form.maxNumHour) {
        callback(new Error('validation.required'))
      } else {
        callback()
      }
    }

    return {
      center: { lat: 10.762622, lng: 106.660172 }, // Vị trí mặc định (TP.HCM)

      ui: {
        isSubmitting: false,
        isSubmittingDraft: false,

        isLoadingRoomView: false,
        isLoadingRoomBed: false,
        isLoadingFacility: false,
      },

      roomBedTypeList: [],
      roomViewList: [],

      facilityList: [],
      facilitySnSelected: null,

      facilityListSelected: [],

      form: {
        hotelSn: this.$route.query.hotelSn ? Number(this.$route.query.hotelSn) : null,
        name: null,
        numOfRoomHotel: null,
        square: null,
        roomBedTypeSnList: [],
        roomViewSnList: [],
        memo: null,

        // Tiện ích & Hình ảnh
        facilitySnList: [],

        // Giá phòng
        hourlyBooking: true,
        priceFirstHours: null,
        firstHours: null,
        priceAdditionalHours: null,
        additionalHours: null,
        maxNumHour: 23, // default

        overnightBooking: true,
        priceOvernight: null,

        dailyBooking: true,
        priceOneDay: null,
        imageList: [],

        // Biến mới từ Thành
        tieu_de: null,
        mo_ta: null,
        gia_thue: null,
        dien_tich: null,
        dia_chi: null,
        latitude: null,
        longitude: null,
        tinh: null,
        xa: null,
        loai_phong: null,
        hinh_anh: [],
        video: null,
        trang_thai: null,
        ngay_tao: null,
        ngay_chinh_sua: null,
        ngay_het_han: null,
        tien_ich_di_kem: [],
      },

      maxNumHourList: Array.from({ length: 13 }, (_, i) => i + 1),

      rules: {
        name: [
          {
            validator: vm.validateRequired,
            trigger: ['blur'],
          },
        ],
        numOfRoomHotel: [
          {
            validator: vm.validateRequired,
            trigger: ['blur'],
          },
        ],
        square: [
          {
            validator: vm.validateRequired,
            trigger: ['blur'],
          },
        ],
        imageList: [
          {
            validator: validateRequiredImages,
            trigger: ['blur', 'change'],
          },
        ],
        priceFirstHours: [
          {
            validator: validateRequiredHourFirstPrice,
            trigger: ['blur'],
          },
        ],
        firstHours: [
          {
            validator: validateRequiredHourFirst,
            trigger: ['blur'],
          },
        ],
        priceAdditionalHours: [
          {
            validator: vm.validateRequired,
            trigger: ['blur'],
          },
        ],
        additionalHours: [
          {
            validator: validateRequiredAdditionalHours,
            trigger: ['blur'],
          },
        ],
        priceOvernight: [
          {
            validator: validateRequiredOvernightPrice,
            trigger: ['blur'],
          },
          {
            validator: vm.validateRequired,
            trigger: ['blur'],
          },
        ],
        priceOneDay: [
          {
            validator: validateRequiredDailyPrice,
            trigger: ['blur'],
          },
          {
            validator: vm.validateRequired,
            trigger: ['blur'],
          },
        ],
        maxNumHour: [
          {
            validator: validateRequiredMaxNumHour,
            trigger: ['blur'],
          },
        ],
      },
    }
  },
  computed: {
    isHourlyBooking: {
      get() {
        return this.form.hourlyBooking === false
      },
      set(val) {
        this.form.hourlyBooking = val ? false : true
      },
    },
    isOvernightBooking: {
      get() {
        return this.form.overnightBooking === false
      },
      set(val) {
        this.form.overnightBooking = val ? false : true
      },
    },
    isDailyBooking: {
      get() {
        return this.form.dailyBooking === false
      },
      set(val) {
        this.form.dailyBooking = val ? false : true
      },
    },
    isDisabledHourly() {
      return !this.form.hourlyBooking
    },
    isDisabledOvernight() {
      return !this.form.overnightBooking
    },
    isDisabledDaily() {
      return !this.form.dailyBooking
    },
    isTickBoxRoomRatesWarning() {
      return !this.form.hourlyBooking && !this.form.overnightBooking && !this.form.dailyBooking
    },
  },
  created() {},
  methods: {
    onAddFacilityList() {
      if (!this.facilityListSelected.some((item) => item.sn === this.facilitySnSelected.sn)) {
        this.facilityListSelected.push(this.facilitySnSelected)
      }
      this.facilitySnSelected = null
    },
    handleRemoveFacility(item) {
      this.facilityListSelected.splice(this.facilityListSelected.indexOf(item), 1)
    },

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
      this.form.imageList = this.form.imageList.filter((img) => img.fileName !== image.fileName)

      this.onRefreshImage()
    },

    onRefreshImage() {
      this.setAsMain()
      this.$refs.cropperFixedRef.resetImage()
    },
    // ----------- END HANDLE IMAGE -----------

    onChangeNumOfRoomHotel(value) {
      this.form.numOfRoomHotel = value
    },
    onChangeSquare(value) {
      this.form.square = value
    },
    onChangeFirstHours(value) {
      this.form.firstHours = value
      this.onChangeMaxNumHour()
    },
    onChangeAdditionalHours(value) {
      this.form.additionalHours = value
      this.onChangeMaxNumHour()
    },

    // START Handle checkbox Không Kinh Doanh
    onChangeHourlyBooking() {
      this.form.priceFirstHours = null
      this.form.firstHours = null
      this.form.priceAdditionalHours = null
      this.form.additionalHours = null
      this.form.maxNumHour = null

      this.onResetValidateField('priceFirstHours')
      this.onResetValidateField('firstHours')
    },
    onChangeOvernightBooking() {
      this.form.priceOvernight = null

      this.onResetValidateField('priceOvernight')
    },
    onChangeDailyBooking() {
      this.form.priceOneDay = null

      this.onResetValidateField('priceOneDay')
    },
    // END Handle checkbox Không Kinh Doanh

    onChangeMaxNumHour() {
      if (this.form.firstHours && !this.form.additionalHours) {
        this.maxNumHourList = [Number(this.form.firstHours)]
        this.form.maxNumHour = Number(this.form.firstHours)
      } else {
        const minHour = Number(this.form.firstHours) + Number(this.form.additionalHours)

        this.maxNumHourList = Array.from({ length: 13 - minHour + 1 }, (_, i) => minHour + i)

        if (this.form.maxNumHour < minHour) {
          this.form.maxNumHour = minHour
        }
      }
    },
    onBack() {
      this.$router.go(-1)
    },
    preHandleBeforeSubmit() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false
        }

        if (this.isTickBoxRoomRatesWarning) {
          this.$message({
            type: 'warning',
            message: 'cannot_create_without_rate',
          })
        } else {
          this.onSubmit()
        }
      })
    },

    async onSubmit() {},
    async createDraftRoomType() {},
  },
}
</script>

<style lang="scss">
@use '../common/scss/create.scss';
</style>