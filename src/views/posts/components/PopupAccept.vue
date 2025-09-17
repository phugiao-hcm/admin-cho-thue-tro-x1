<template>
    <el-dialog
        v-model="visible"
        title="Cảnh báo"
        width="400"
        align-center
        :show-close="false"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
    >
        <p class="body-medium-semi-bold neutral-700" style="margin-bottom: 8px">
            {{ row?.title }}
        </p>
        <p class="body-small-regular neutral-700">Bạn có chắc chắn duyệt tin cho loại phòng này?</p>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="close">Huỷ</el-button>
                <el-button :loading="ui.isSubmitting" type="primary" @click="onSubmit">
                    Xác nhận Duyệt
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ref, defineExpose, reactive } from 'vue'
import { updatePhongTroStatus } from '../list/api'

const emit = defineEmits<{
    (e: 'onSuccess'): void
}>()

const ui = reactive({
    isSubmitting: false,
})

const visible = ref(false)
const row = ref<any>()

const open = (data: any) => {
    visible.value = true
    row.value = data
}
const close = () => (visible.value = false)
const confirm = () => {
    visible.value = false
    emit('onSuccess')
}

const onSubmit = async () => {
    console.log('onSubmit')
    ui.isSubmitting = true
    try {
        const formData = {
            phongTroId: row.value.id,
            status: 1,
        }
        // gọi API lưu post khi đã có link ảnh
        const id = await updatePhongTroStatus(formData)
        if (id) {
            ElMessage({
                message: 'Duyệt Tin thành công!',
                type: 'success',
            })
            confirm()
        }
    } catch (error) {
        alert('Có lỗi xảy ra: ' + error)
    } finally {
        ui.isSubmitting = false
    }
}

defineExpose({ open, close })
</script>
