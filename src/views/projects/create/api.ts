import { collection, addDoc, Timestamp, getFirestore } from 'firebase/firestore'
import app from '@/plugins/firebaseConfig' // assuming default export is your FirebaseApp

const db = getFirestore(app)

export async function addProject(project: Omit<any, 'id'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, 'projects'), {
      ...project,
      createdAt: Timestamp.now(), // thêm timestamp
    })
    return docRef.id
  } catch (error) {
    throw error
  }
}
