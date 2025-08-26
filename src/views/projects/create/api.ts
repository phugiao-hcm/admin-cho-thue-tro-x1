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
