// import axios from 'axios'

// const CLOUD_NAME = 'ds8q7doz2' // Lấy trong Dashboard
// const UPLOAD_PRESET = 'my_unsigned_preset' // Tạo trong bước 1

// export async function uploadImage(file: File): Promise<string> {
//   const formData = new FormData()
//   formData.append('file', file)
//   formData.append('upload_preset', UPLOAD_PRESET)

//   const res = await axios.post(
//     `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
//     formData,
//     { headers: { 'Content-Type': 'multipart/form-data' } },
//   )

//   return res.data.secure_url // link ảnh
// }

import axios from 'axios'

export async function getTokenImage(): Promise<string> {
  const res = await axios.post(`https://api.sirv.com/v2/token`)

  return res.data
}

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData()
  formData.append('file', file)

  const res = await axios.post(
    `https://api.sirv.com/v2/files/upload?filename=/phongtro/2.jpg`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  )

  return res.data
}
