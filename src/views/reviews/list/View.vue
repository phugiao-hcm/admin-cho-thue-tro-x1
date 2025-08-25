<template>
    <HaSection>
        <p class="title3 neutral-700" style="margin: 16px 0 8px">Danh sách đánh giá</p>
        <div class="flex-between">
            <div>
                <p class="body-small-regular neutral-500">
                    Danh sách các khách sạn mà bạn đã đánh giá gần đây, bạn có thể xem lại chi tiết
                    đánh giá của mình tại đây.
                </p>
            </div>
            <div class="flex-center">
                <p class="flex-center">
                    <el-icon><Lock /></el-icon>
                    <span>An ninh</span>
                </p>
                <p class="flex-center">
                    <el-icon><Present /></el-icon>
                    <span>Tiện ích</span>
                </p>
                <p class="flex-center">
                    <el-icon><MapLocation /></el-icon>
                    <span>Không gian</span>
                </p>
            </div>
        </div>

        <div class="custom-grid-review" style="margin-top: 24px">
            <div v-for="(item, index) in hotelList" :key="index">
                <el-card class="box-card-mini" shadow="never">
                    <p class="body-medium-semi-bold neutral-700 text-hidden">
                        {{ item.name }}
                    </p>
                    <p
                        v-if="!item.averageMark"
                        class="body-small-regular neutral-500"
                        style="margin: 16px 0"
                    >
                        Chưa có đánh giá
                    </p>
                    <div v-else>
                        <div class="flex" style="margin: 16px 0">
                            <div style="flex: 1">
                                <p class="body-small-medium neutral-700">
                                    {{ setRate(3.4) }}
                                </p>
                                <p class="title2 neutral-700">
                                    {{ formatAvaRageMark(4) }}
                                </p>
                                <p class="body-small-regular neutral-500">
                                    {{ `${1234} đánh giá` }}
                                </p>
                            </div>
                            <div style="flex: 2" class="w-100">
                                <div class="w-100 custom-gird-progress-mini">
                                    <div>
                                        <el-icon><Lock /></el-icon>
                                    </div>
                                    <div class="w-100">
                                        <Progress color="#667085" :percentage="setAverageMark(3)">
                                        </Progress>
                                    </div>
                                    <div>
                                        <p class="body-small-medium neutral-500">3</p>
                                    </div>
                                </div>
                                <div class="w-100 custom-gird-progress-mini">
                                    <div>
                                        <el-icon><Present /></el-icon>
                                    </div>
                                    <div class="w-100">
                                        <Progress color="#667085" :percentage="4"> </Progress>
                                    </div>
                                    <div>
                                        <p class="body-small-medium neutral-500">4</p>
                                    </div>
                                </div>
                                <div class="w-100 custom-gird-progress-mini">
                                    <div>
                                        <el-icon><MapLocation /></el-icon>
                                    </div>
                                    <div class="w-100">
                                        <Progress color="#667085" :percentage="5"> </Progress>
                                    </div>
                                    <div>
                                        <p class="body-small-medium neutral-500">5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <el-link :underline="false" type="primary" class="body-small-medium"
                            >Xem chi tiết</el-link
                        >
                    </div>
                </el-card>
            </div>
        </div>
    </HaSection>
</template>

<script setup lang="ts">
import HaSection from '@/components/global/HaSection.vue'
import Progress from '../components/progress.vue'
import { Lock, Present, MapLocation } from '@element-plus/icons-vue'

const hotelList = [
    {
        name: 'Khách sạn Mường Thanh Luxury Sông Lam',
        averageMark: 4.2,
    },
    {
        name: 'Khách sạn Mường Thanh Luxury Sông Lam',
        averageMark: 3.8,
    },
    {
        name: 'Khách sạn Mường Thanh Luxury Sông Lam',
        averageMark: null,
    },
]

const setAverageMark = (value: number) => {
    return value ? value * 10 * 2 : 0
}

const setRate = (averageMark: number) => {
    if (averageMark >= 0.1 && averageMark <= 3.4) return 'Tàm tạm'
    else if (averageMark >= 3.5 && averageMark <= 3.9) return 'Chấp nhận được'
    else if (averageMark >= 4.0 && averageMark <= 4.4) return 'Rất tốt'
    else if (averageMark >= 4.5 && averageMark <= 5.0) return 'Tuyệt vời'
    else return ''
}

const formatAvaRageMark = (value: number) => {
    switch (value) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return `${value}.0`
        default:
            return value
    }
}
</script>

<style lang="scss" scoped>
.custom-grid-review {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
    }
}
</style>