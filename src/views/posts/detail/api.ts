import app from '../../../plugins/firebaseConfig' // assuming default export is your FirebaseApp
import { doc, getDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

export interface Project {
  id: string
  name: string
  location: string
  status: string
  description?: string // optional
  //   [key: string]: any     // nếu muốn thêm field linh hoạt
}

const db = getFirestore(app) // get Firestore instance from FirebaseApp

// Lấy chi tiết 1 project theo id
export const getProjectById = async (id: string): Promise<Project | null> => {
  try {
    const docRef = doc(db, 'posts', id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data() as Omit<Project, 'id'> // loại bỏ id trong Project
      return {
        id: docSnap.id,
        ...data,
      }
    } else {
      console.log('No such document!')
      return null
    }
  } catch (e) {
    console.error('Error fetching project: ', e)
    throw e
  }
}

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================

import api from '@/apis/axios' // đường dẫn file api.ts của bạn

// GET
const getPhongTroDetail = async (id: number) => {
  try {
    const response = await api.get(`/v1/phongtro/getPhongTroDetail?id=${id}`)
    console.log('Users:', response.data)
  } catch (error) {
    console.error('Fetch users failed:', error)
  }
}

// POST
const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password })
    console.log('Login success:', response.data)
    // Lưu token vào localStorage
    localStorage.setItem('token', response.data.token)
  } catch (error) {
    console.error('Login failed:', error)
  }
}
