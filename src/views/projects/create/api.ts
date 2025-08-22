// // src/api/projects.ts
// import { db } from '@/plugins/firebase'
// import { collection, addDoc, Timestamp } from 'firebase/firestore'

// export interface Project {
//   name: string
//   description: string
//   createdAt?: Date
// }

// export const addProject = async (project: Project) => {
//   try {
//     const docRef = await addDoc(collection(db, 'projects'), {
//       ...project,
//       createdAt: Timestamp.now(), // thêm thời gian tạo
//     })
//     console.log('Document written with ID: ', docRef.id)
//     return docRef.id
//   } catch (e) {
//     console.error('Error adding document: ', e)
//     throw e
//   }
// }
