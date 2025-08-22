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
    const docRef = doc(db, 'projects', id)
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
