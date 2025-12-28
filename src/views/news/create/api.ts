import api from '@/apis/axios'

export interface CreatePostPayload {
  title: string | null
  description: string | null
  content: string | null
  featured_image: object | null
}

export const createPhongTroNews = async (data: CreatePostPayload) => {
  return await api.post('/v1/phongtro/createPhongTroNews', data)
}
