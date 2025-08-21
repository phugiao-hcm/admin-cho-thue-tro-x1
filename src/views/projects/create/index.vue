<template>
  <ha-offset-section :isHeaderCustom="true">
    <div class="flex-baseline wrap" style="margin-bottom: 16px">
      <div class="flex-baseline wrap">
        <div>
          <el-link :underline="false" type="primary" @click="onBack">
            <span class="icon-arrow-left-2" style="margin-right: 8px"></span>
          </el-link>
        </div>
        <div>
          <p class="title2 neutral-900">'room_type.create_room_type</p>
          <p class="body-medium-regular neutral-500">
            {{ $route.query.hotelName }}
          </p>
        </div>
      </div>

      <div class="flex-center wrap">
        <el-button :loading="ui.isSubmittingDraft" size="small" @click="createDraftRoomType">
          'room_type.save_draft
        </el-button>
        <el-button
          :loading="ui.isSubmitting"
          type="primary"
          size="small"
          @click="preHandleBeforeSubmit"
        >
          'room_type.submit_for_review
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
          <p class="body-medium-semi-bold neutral-700">'room_type.room_information</p>
          <p class="body-small-regular neutral-500">'room_type.setup_basic_room_info</p>
        </div>
        <div class="flex-right mobile-mt-sm">
          <div class="custom-card">
            <div>
              <p class="body-small-regular neutral-700">
                'room_type.room_type_name
                <span class="secondary-red-600">*</span>
              </p>
            </div>
            <div>
              <el-form-item prop="name">
                <el-input
                  :placeholder="'room_type.enter_room_type_name'"
                  v-model="form.name"
                ></el-input>
              </el-form-item>
            </div>
          </div>

          <div class="custom-card">
            <div class="mt-12px flex-gap">
              <div class="w-100">
                <p class="body-small-regular neutral-700">
                  'room_type.number_of_rooms
                  <span class="secondary-red-600">*</span>
                </p>
                <el-form-item prop="numOfRoomHotel">
                  <InputNumber
                    :algin="'left'"
                    :min="1"
                    :max="100"
                    :placeholder="'room_type.enter_number_of_rooms'"
                    :valueNumber="form.numOfRoomHotel"
                    @onChange="onChangeNumOfRoomHotel"
                  />
                </el-form-item>
              </div>
              <div class="w-100">
                <p class="body-small-regular neutral-700">
                  'room_type.room_size
                  <span class="secondary-red-600">*</span>
                </p>
                <el-form-item prop="square">
                  <InputNumber
                    :algin="'left'"
                    :suffix="` m²`"
                    :min="0"
                    :max="9999"
                    :placeholder="'room_type.enter_room_size'"
                    :valueNumber="form.square"
                    @onChange="onChangeSquare"
                  />
                </el-form-item>
              </div>
            </div>
          </div>

          <div class="custom-card">
            <div>
              <p class="body-small-regular neutral-700">'room_type.bed_type</p>
            </div>
            <div>
              <el-form-item>
                <el-select
                  :loading="ui.isLoadingRoomBed"
                  class="w-100"
                  v-model="form.roomBedTypeSnList"
                  multiple
                  :placeholder="'room_type.select_bed_type'"
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
              <p class="body-small-regular neutral-700">'room_type.room_view</p>
            </div>
            <div>
              <el-form-item>
                <el-select
                  :loading="ui.isLoadingRoomView"
                  class="w-100"
                  v-model="form.roomViewSnList"
                  multiple
                  :placeholder="'room_type.select_room_view'"
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
              <p class="body-small-regular neutral-700">'room_type.room_description</p>
            </div>
            <div>
              <el-form-item>
                <el-input
                  type="textarea"
                  :placeholder="'room_type.enter_brief_description'"
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
          <p class="body-medium-semi-bold neutral-700">'room_type.facilities_and_images</p>
          <p class="body-small-regular neutral-500">'room_type.add_facilities_and_images</p>
        </div>
        <div class="flex-right mobile-mt-sm">
          <div class="custom-card">
            <div class="flex-between">
              <p class="body-small-regular neutral-700">'room_type.add_facilities</p>

              <el-select
                v-model="facilitySnSelected"
                filterable
                remote
                reserve-keyword
                :placeholder="'room_type.select_facilities'"
                :loading-text="'message.loading'"
                :no-data-text="'no_data'"
                :remote-method="searchHotelGroups"
                :loading="ui.isLoadingFacility"
                clearable
                @change="onAddFacilityList"
              >
                <span slot="prefix" class="icon-search"></span>
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
                  <span class="body-small-regular primary-600">{{ item.name }}</span>
                </el-tag>
              </el-form-item>
            </div>
          </div>

          <div class="custom-card">
            <div>
              <p class="body-small-regular neutral-500">
                'room_type.add_room_images
                <span class="secondary-red-600">*</span>
              </p>
              <p class="body-small-regular neutral-500">'room_type.image_requirements</p>
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
                  <span class="image-order body-extra-small-semi-bold neutral-800">{{
                    index + 1
                  }}</span>

                  <div class="image-actions">
                    <div>
                      <div v-if="!image.firstDisplay">
                        <el-tooltip :content="'room_type.set_as_default_image'" placement="top">
                          <i
                            class="el-icon-star-on"
                            :class="image.firstDisplay ? 'secondary-orange-600' : 'neutral-0'"
                            @click="setAsMain(image)"
                          />
                        </el-tooltip>
                      </div>
                    </div>

                    <div>
                      <el-tooltip :content="'room_type.delete_image'" placement="top">
                        <i class="el-icon-delete neutral-0" @click="deleteImage(image)" />
                      </el-tooltip>
                    </div>
                  </div>

                  <div v-if="image.firstDisplay" class="main-label flex-center">
                    <i class="el-icon-star-on secondary-orange-500" />
                    <p class="small-cap-small-cap secondary-orange-600">'room_type.default_image</p>
                  </div>
                </div>

                <!-- Thêm ảnh -->
                <div v-show="form.imageList.length < 11">
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
        </div>
      </div>
      <el-divider></el-divider>
      <!-- ================= GIÁ PHÒNG ================= -->
      <div class="custom-flex">
        <div class="flex-left">
          <el-form-item prop="policyContent">
            <p class="body-medium-semi-bold neutral-700">'room_type.room_rates</p>
            <p class="body-small-regular neutral-500">'room_type.setup_room_rates</p>
          </el-form-item>
        </div>
        <div class="flex-right mobile-mt-sm">
          <!-- ================= THEO GIỜ ================= -->
          <div class="custom-card">
            <div class="my-8px mobile-mt-sm">
              <div class="custom-flex">
                <div class="flex-1">
                  <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                      <div class="flex-between wrap">
                        <p class="body-small-regular neutral-700">'room_type.hourly_room_rate</p>
                        <p>
                          <el-checkbox v-model="isHourlyBooking" @change="onChangeHourlyBooking">{{
                            'room_type.not_in_business'
                          }}</el-checkbox>
                        </p>
                      </div>
                    </div>

                    <div>
                      <p class="body-small-regular neutral-700">
                        'room_type.first_hour_rate
                        <span class="secondary-red-600">*</span>
                      </p>
                      <div class="custom-row-grid">
                        <div class="w-100">
                          <el-form-item prop="priceFirstHours">
                            <InputRoundMoney
                              :disabled="isDisabledHourly"
                              :algin="'left'"
                              :suffix="`'room_type.vnd'`"
                              :placeholder="'room_type.enter_amount'"
                              v-model="form.priceFirstHours"
                            />
                          </el-form-item>
                        </div>
                        <div class="w-100">
                          <el-form-item prop="firstHours">
                            <InputNumber
                              :disabled="isDisabledHourly"
                              :algin="'left'"
                              :suffix="` 'room_type.first_hour_s'`"
                              :min="0"
                              :max="10"
                              :placeholder="'room_type.first_hours'"
                              :valueNumber="form.firstHours"
                              @onChange="onChangeFirstHours"
                            />
                          </el-form-item>
                        </div>
                      </div>
                    </div>

                    <div class="mt-12px">
                      <p class="body-small-regular neutral-700">'room_type.additional_hour_rate</p>
                      <div class="custom-row-grid">
                        <div class="w-100">
                          <el-form-item prop="priceAdditionalHours">
                            <InputRoundMoney
                              :disabled="isDisabledHourly"
                              :algin="'left'"
                              :suffix="`'room_type.vnd'`"
                              :placeholder="'room_type.enter_amount'"
                              v-model="form.priceAdditionalHours"
                            />
                          </el-form-item>
                        </div>
                        <div class="w-100">
                          <el-form-item prop="additionalHours">
                            <InputNumberAcceptNull
                              :disabled="isDisabledHourly"
                              :algin="'left'"
                              :suffix="` 'room_type.additional_hour_s'`"
                              :min="0"
                              :max="10"
                              :placeholder="'room_type.additional_hours'"
                              :valueNumber="form.additionalHours"
                              @onChange="onChangeAdditionalHours"
                            />
                          </el-form-item>
                        </div>
                      </div>
                    </div>

                    <div class="mt-12px">
                      <p class="body-small-regular neutral-700 flex-center">
                        'room_type.maximum_booking_hours
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
                  </el-card>
                </div>
              </div>
            </div>
          </div>
          <!-- ================= QUA ĐÊM ================= -->
          <div class="custom-card">
            <div class="my-8px mobile-mt-sm">
              <div class="custom-flex">
                <div class="flex-1">
                  <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                      <div class="flex-between wrap">
                        <p class="body-small-regular neutral-700">'room_type.overnight_room_rate</p>
                        <p>
                          <el-checkbox
                            v-model="isOvernightBooking"
                            @change="onChangeOvernightBooking"
                            >'room_type.not_in_business</el-checkbox
                          >
                        </p>
                      </div>
                    </div>

                    <div>
                      <p class="body-small-regular neutral-700">
                        'room_type.price_per_night
                        <span class="secondary-red-600">*</span>
                      </p>
                      <div class="flex-center">
                        <div class="w-100">
                          <el-form-item prop="priceOvernight">
                            <InputRoundMoney
                              :disabled="isDisabledOvernight"
                              :algin="'left'"
                              :suffix="`'room_type.vnd'`"
                              :placeholder="'room_type.enter_amount'"
                              v-model="form.priceOvernight"
                            />
                          </el-form-item>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </div>
          <!-- ================= THEO NGÀY ================= -->
          <div class="custom-card">
            <div class="my-8px mobile-mt-sm">
              <div class="custom-flex">
                <div class="flex-1">
                  <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                      <div class="flex-between wrap">
                        <p class="body-small-regular neutral-700">'room_type.daily_room_rate</p>
                        <p>
                          <el-checkbox v-model="isDailyBooking" @change="onChangeDailyBooking">{{
                            'room_type.not_in_business'
                          }}</el-checkbox>
                        </p>
                      </div>
                    </div>

                    <div>
                      <p class="body-small-regular neutral-700">
                        'room_type.price_per_day
                        <span class="secondary-red-600">*</span>
                      </p>
                      <div class="flex-center">
                        <div class="w-100">
                          <el-form-item prop="priceOneDay">
                            <InputRoundMoney
                              :disabled="isDisabledDaily"
                              :algin="'left'"
                              :suffix="`'room_type.vnd'`"
                              :placeholder="'room_type.enter_amount'"
                              v-model="form.priceOneDay"
                            />
                          </el-form-item>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-form>
  </ha-offset-section>
</template>


<script>
import HaOffsetSection from '@/components/global/HaOffsetSection.vue'

const timeDebounce = 1200
export default {
  name: 'CreateRoomType',
  components: {
    HaOffsetSection,
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
    async uploadFileZip(preSigned, filePath) {},
    async createDraftRoomType() {},
  },
}
</script>

<style lang="scss">
@use '../common/scss/create.scss'; // KHÔNG cần dấu gạch dưới và phần mở rộng .scss
</style>