import { collection, addDoc, Timestamp, getFirestore } from 'firebase/firestore'
import app from '@/plugins/firebaseConfig' // assuming default export is your FirebaseApp

const db = getFirestore(app)

export async function addPost(project: Omit<any, 'id'>): Promise<string> {
  try {
    console.log('project :', project)
    const docRef = await addDoc(collection(db, 'posts'), {
      ...project,
      createdAt: Timestamp.now(), // thêm timestamp
    })
    return docRef.id
  } catch (error) {
    throw error
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

import api from '@/apis/axios'

export interface CreatePostPayload {
  title: string | null
  content: string | null
  square: number | null
  price: number | null
  deposit: string | null
  provinceId: string | null
  wardId: string | null
  houseNo: string | null
  ownerName: string | null

  ownerPhone: string | null
  photos: any[]
  totalRoom: number | null
  currentRoom: number | null
  roomType: number | null
  roomDirection: number | null
  adType: number | null

  latitude: any | null
  longitude: any | null
  facility: number[]
}

export const createPhongTro = async (data: CreatePostPayload) => {
  return await api.post('/v1/phongtro/createPhongTro', data)
}
