import api from '@/apis/axios'

export interface CreatePostPayload {
  title: string | null
  shortDescription: string | null
  content: string | null
  photos: any[]
  categoryId: number | null
}

export const createPhongTro = async (data: CreatePostPayload) => {
  return await api.post('/v1/phongtro/createPhongTro', data)
}
