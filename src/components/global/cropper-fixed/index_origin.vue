<template>
  <div>
    <el-dialog
      custom-class="dialog-upload-file"
      :title="$t('option.youWantToUpload')"
      :visible.sync="dialogTypeImageVisible"
    >
      <div>
        <div>
          <div class="upload-file">
            <label class="upload-file__label custom-update-file">
              <input
                type="file"
                ref="file"
                :accept="accept"
                @change="loadImage($event, false)"
                @click="onRemove"
              />
              <i class="el-icon-picture-outline"></i>
              {{ $t("option.uploadImageNormal") }}
            </label>
          </div>
        </div>
        <div v-if="showUploadImage360">
          <div class="upload-file">
            <label class="upload-file__label custom-update-file bg-white">
              <input
                type="file"
                ref="file"
                :accept="accept"
                @change="loadImage($event, true)"
                @click="onRemove"
              />
              <i>
                <img src="@/assets/images/svg/icon-360.png" width="20px" />
              </i>
              {{ $t("option.uploadImage360") }}
            </label>
          </div>
        </div>
      </div>
    </el-dialog>
    <!-- ============  HANDLE IMAGES ============== -->
    <el-dialog
      custom-class="dialog-cropper"
      :visible.sync="dialogVisibleCropper"
      :width="`${defaultSize().width + 10}px !important`"
      class="thumbnail-dialog"
    >
      <div class="thumbnail-dialog__body">
        <cropper
          ref="cropper"
          :src="image.src"
          image-restriction="stencil"
          :default-size="defaultSize"
          :stencil-props="{
            handlers: {},
            movable: false,
            resizable: false,
            aspectRatio: width / height,
          }"
          :stencil-size="{
            width: width,
            height: height,
          }"
        />
      </div>
      <div slot="footer" class="thumbnail-dialog__footer">
        <div>
          <el-checkbox
            class="mr-4px"
            :true-label="1"
            :false-label="0"
            v-model="keepOriginalImage"
            >{{ $t("option.KeepOriginalExtension") }}</el-checkbox
          >
          <el-tooltip :content="$t('option.notedChangeToWebp')" placement="top">
            <i class="el-icon-info"></i>
          </el-tooltip>
        </div>
        <div class="flex justify-flex-end">
          <el-button
            type="info"
            @click="dialogVisibleCropper = false"
            size="small"
          >
            {{ $t("button.cancel") }}
          </el-button>
          <el-button
            size="small"
            :loading="ui.isSubmitting"
            type="primary"
            @click="crop()"
          >
            {{ $t("button.confirm") }}
          </el-button>
        </div>
      </div>
    </el-dialog>
    <img :src="imageCropper" style="display: none" />
    <div
      class="upload-file custom-button-upload"
      v-if="typeUpload === 'file-upload'"
    >
      <el-button type="primary" @click="onRemove" size="small">
        {{ $t("button.chooseFile") }} <slot />
      </el-button>
    </div>
    <div
      class="avatar-upload"
      @click="onRemove"
      v-else-if="typeUpload === 'avatar-upload'"
    >
      <i class="el-icon-plus"> </i>
    </div>
    <div v-else-if="typeUpload === 'avatar-upload-custom'">
      <template>
        <div class="fit-content" @click="onRemove">
          <slot />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

function getMimeType(file, fallback = null) {
  const byteArray = new Uint8Array(file).subarray(0, 4);
  let header = "";
  for (let i = 0; i < byteArray.length; i++) {
    header += byteArray[i].toString(16);
  }
  switch (header) {
    case "89504e47":
      return "image/png";
    case "47494638":
      return "image/gif";
    case "ffd8ffe0":
    case "ffd8ffe1":
    case "ffd8ffe2":
    case "ffd8ffe3":
    case "ffd8ffe8":
      return "image/jpeg";
    default:
      return fallback;
  }
}
export default {
  name: "CropperFixed",
  props: {
    width: {
      type: [String, Number],
      default: 300,
    },
    height: {
      type: [String, Number],
      default: 300,
    },
    typeUpload: {
      type: String,
      default: "file-upload",
      validator: (value) =>
        ["file-upload", "avatar-upload", "avatar-upload-custom"].indexOf(
          value
        ) !== -1,
    },
    accept: {
      type: String,
      default: "image/png, image/jpeg, image/jpg",
    },
    showUploadImage360: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Cropper,
  },
  data: () => {
    return {
      dialogTypeImageVisible: false,
      image: {
        src: null,
        type: null,
      },
      ui: {
        isSubmitting: false,
      },
      infoFile: {},
      result: null,
      imageCropper: null,
      dialogVisibleCropper: false,
      keepOriginalImage: 0,
      is360: false,
      result360: null,
    };
  },
  methods: {
    open() {
      this.dialogTypeImageVisible = true;
    },
    onRemove(e) {
      this.dialogTypeImageVisible = true;
      this.keepOriginalImage = 0;
      e.target.value = "";
      this.is360 = false;
    },
    defaultSize() {
      return {
        width: this.width,
        height: this.height,
      };
    },
    crop() {
      try {
        this.ui.isSubmitting = true;
        const { coordinates, canvas } = this.$refs.cropper.getResult();
        this.imageCropper = canvas.toDataURL();
        this.onResize(coordinates);
      } catch (error) {
        return false;
      } finally {
        this.dialogTypeImageVisible = false;
      }
    },
    onResize(coordinates) {
      setTimeout(async () => {
        await this.getScaleCanvas(coordinates);
        this.dialogVisibleCropper = false;
        this.ui.isSubmitting = false;
      }, 50);
    },
    getScaleCanvas(canvas) {
      var vm = this;
      const img = new Image();
      img.src = this.imageCropper;
      const scaleCanvas = document.createElement("canvas");
      const scale = this.width / canvas.width;

      scaleCanvas.width = canvas.width * scale * 2;
      scaleCanvas.height = canvas.height * scale * 2;

      const ctx = scaleCanvas.getContext("2d");

      ctx.save();
      ctx.drawImage(img, 0, 0, scaleCanvas.width, scaleCanvas.height);
      ctx.restore();
      const imageData = scaleCanvas.toDataURL("image/webp", 0.98);

      scaleCanvas.toBlob(
        async function (blob) {
          vm.result = new File(
            [blob],
            vm.keepOriginalImage
              ? vm.infoFile.name
              : `${vm.infoFile.name}.webp`,
            { type: blob.type }
          );
          vm.$emit("onResult", vm.result);
        },
        vm.keepOriginalImage ? vm.infoFile.type : "image/webp"
      );
      return imageData;
    },
    loadImage(event, is360) {
      if (!is360) {
        this.dialogVisibleCropper = true;
      }
      this.is360 = is360; // Xác định ảnh phải là 360 không

      // Reference to the DOM input element
      const { files } = event.target;
      // Ensure that you have a file before attempting to read it
      if (files && files[0]) {
        this.infoFile = files[0];

        // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
        if (this.image.src) {
          URL.revokeObjectURL(this.image.src);
        }
        // 2. Create the blob link to the file to optimize performance:
        const blob = URL.createObjectURL(files[0]);

        // 3. The steps below are designated to determine a file mime type to use it during the
        // getting of a cropped image from the canvas. You can replace it them by the following string,
        // but the type will be derived from the extension and it can lead to an incorrect result:
        //
        // this.image = {
        //    src: blob;
        //    type: files[0].type
        // }

        // Create a new FileReader to read this image binary data
        const reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.image" refers to the image of Vue component
          this.image = {
            // Set the image source (it will look like blob:http://example.com/2c5270a5-18b5-406e-a4fb-07427f5e7b94)
            src: blob,
            // Determine the image type to preserve it during the extracting the image from canvas:
            type: getMimeType(e.target.result, files[0].type),
          };
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsArrayBuffer(files[0]);
      }
      if (is360 && files[0] && this.infoFile) {
        this.ResizeImage360();
      }
    },
    ResizeImage360() {
      var self = this;
      if (self.infoFile) {
        var reader = new FileReader();
        // Set the image once loaded into file reader
        reader.onload = function (e) {
          const img360 = new Image();
          img360.src = e.target.result;
          var scaleCanvas360 = document.createElement("canvas");

          scaleCanvas360.width = img360.width;
          scaleCanvas360.height = img360.height;

          const ctx360 = scaleCanvas360.getContext("2d");
          if (scaleCanvas360.width && scaleCanvas360.height) {
            ctx360.save();
            ctx360.drawImage(
              img360,
              0,
              0,
              scaleCanvas360.width,
              scaleCanvas360.height
            );
            ctx360.restore();

            const imageData360 = scaleCanvas360.toDataURL("image/webp");
            scaleCanvas360.toBlob(
              function (blob) {
                self.result360 = new File(
                  [blob],
                  self.keepOriginalImage
                    ? self.infoFile.name
                    : `${self.infoFile.name}.webp`,
                  { type: blob.type }
                );
                self.$emit("onResult", self.result360, self.is360);
              },
              self.keepOriginalImage ? self.infoFile.type : "image/webp"
            );
            return imageData360;
          } else {
            self.ResizeImage360();
          }
        };
        reader.readAsDataURL(self.infoFile);
      }
      this.dialogTypeImageVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.dialog-cropper) {
  width: 80vw !important;
  @media (min-width: 720px) {
    max-width: 35vw !important;
    min-width: 250px;
  }
}
:deep(.el-dialog__body) {
  padding: 16px 20px;
}
:deep(.dialog-upload-file) {
  width: 80vw !important;
  @media (min-width: 720px) {
    width: fit-content !important;
  }
}
.upload-file {
  display: flex;
  align-items: center;
  gap: 12px;
  &__label {
    &:hover {
      opacity: 0.8;
    }
    transition: all 0.2s ease-in;
    color: #fff;
    display: block;
    background-color: #409eff;
    border-color: #409eff;

    padding: 8px 20px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 4px;
    input[type="file"] {
      display: none;
    }
  }
  &__name {
    color: #8a98ac;
    font-size: 12px;
    font-weight: 500;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}
.thumbnail-dialog {
  &__body {
    border-radius: 6px;
    box-sizing: border-box;
    line-height: 146px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    :deep(.el-icon-error) {
      font-size: 16px;
      margin-right: 4px;
      color: #f56c6c;
    }
    &--none {
      display: flex;
      align-items: center;
    }
  }
  &__footer {
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.mr-4px {
  margin-right: 4px;
}
.fit-content {
  width: fit-content;
}
.custom-update-file {
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  height: 148px;
  line-height: 146px;
  vertical-align: top;
  width: 100%;

  i {
    font-size: large;
  }
}
.bg-white {
  background: #fbfdff;
  color: black;
}
.avatar-upload {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #e0e0e0;
  border-radius: 4px;
  width: 84px;
  height: 84px;
  transition: all 0.2s ease-in;
  &:hover {
    border-color: #2196f3;
  }
  .el-icon-plus {
    color: #2196f3;
    font-size: 24px;
  }
}

:deep(.el-dialog__header) {
  display: flex;
  gap: 12px;

  button {
    position: unset;
  }
}
</style>
