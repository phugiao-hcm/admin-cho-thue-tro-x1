import api from '@/plugins/axios'

export interface User {
  id: number
  name: string
  email: string
}

// Trả về Promise<User[]>
export const getUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>('/users')
  return res.data
}

// Lấy 1 user theo ID
export const getUserById = async (id: number): Promise<User> => {
  const res = await api.get<User>(`/users/${id}`)
  return res.data
}
