import { collection, getDocs, getFirestore } from 'firebase/firestore'
import app from '../../../plugins/firebaseConfig' // assuming default export is your FirebaseApp

export interface Projects {
  id: string
  name: string
  location: string
  status: string
  description?: string // optional
  //   [key: string]: any     // nếu muốn thêm field linh hoạt
}

const db = getFirestore(app) // get Firestore instance from FirebaseApp

export async function getProjectList(): Promise<Projects[]> {
  const querySnapshot = await getDocs(collection(db, 'projects'))

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Projects, 'id'>),
  }))
}
