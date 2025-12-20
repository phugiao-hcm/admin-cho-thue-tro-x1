<template>
    <div class="pin-page">
        <div class="pin-box">
            <h2>Nhập mã bảo mật (6 chữ số)</h2>
            <p class="hint">Để đăng nhập</p>

            <input
                v-model="pin"
                @input="onInput"
                type="password"
                inputmode="numeric"
                maxlength="6"
                placeholder="••••••"
                class="pin-input"
            />

            <div class="actions">
                <button class="btn" @click="confirm">Xác nhận</button>
            </div>

            <p v-if="error" class="error">{{ error }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const PIN_CODE = '050101'
const pin = ref('')
const error = ref('')
const router = useRouter()
const route = useRoute()

function onInput(e: Event) {
    const target = e.target as HTMLInputElement
    // keep digits only
    target.value = target.value.replace(/\D+/g, '').slice(0, 6)
    pin.value = target.value
    error.value = ''
}

function confirm() {
    if (pin.value.length !== 6) {
        error.value = 'Vui lòng nhập đủ 6 chữ số.'
        return
    }
    if (pin.value !== PIN_CODE) {
        error.value = 'Mã không đúng. Vui lòng thử lại.'
        return
    }
    // success: store unlocked flag in session (expires when tab closed)
    sessionStorage.setItem('pinUnlocked', 'true')
    // redirect to original route if present
    const redirect = (route.query.redirect as string) || '/'
    router.replace(redirect)
}
</script>

<style scoped>
.pin-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
}
.pin-box {
    width: 320px;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    text-align: center;
    background: var(--bg-color, #fff);
}
.pin-input {
    width: 100%;
    padding: 12px 14px;
    font-size: 20px;
    letter-spacing: 6px;
    text-align: center;
    margin-top: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
}
.actions {
    margin-top: 12px;
}
.btn {
    padding: 8px 16px;
    border-radius: 6px;
    background: #0f62fe;
    color: #fff;
    border: none;
    cursor: pointer;
}
.error {
    color: #ef4444;
    margin-top: 8px;
}
.hint {
    color: #6b7280;
    font-size: 13px;
}
</style>
