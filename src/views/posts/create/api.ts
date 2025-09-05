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

export interface CreateUserPayload {
  title: string
  content: string
  square: string
  price: string
  deposit: string
  provinceId: string
  districtId: string
  wardId: string
  streetId: string
  houseNo: string
  ownerName: string

  ownerPhone: string
  photos: string[]
  totalRoom: string
  currentRoom: string
  roomType: string
  roomDirection: string
  adType: string

  latitude: string
  longitude: string
  facility: String[]
}

export const createPhongTro = async (data: CreateUserPayload) => {
  return await api.post('/v1/phongtro/createPhongTro', data)
}
