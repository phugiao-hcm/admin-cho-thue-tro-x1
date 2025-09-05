import api from '@/apis/axios'

export interface Post {
  id: string
  name: string
  location: string
  status: string
  description?: string // optional
  //   [key: string]: any     // nếu muốn thêm field linh hoạt
}

export async function getPosts(params: any): Promise<Post[]> {
  const res = await api.get<Post[]>(
    '/v1/phongtro/getPhongTroList?page=1&provinceId=1&districtId=1&wardId&streetId&price&square&areaId&facility=[]',
  )
  return res.data
}
