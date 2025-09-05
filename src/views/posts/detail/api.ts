import api from '@/apis/axios' // đường dẫn file api.ts của bạn

export async function getPhongTroDetail(id: any): Promise<{}> {
  const res = await api.get<{}>(`/v1/phongtro/getPhongTroDetail?id=${id}`)
  return res.data
}
