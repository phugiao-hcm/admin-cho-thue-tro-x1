import axios from 'axios'

export async function getProvinces(): Promise<string> {
  const res = await axios.get(`https://provinces.open-api.vn/api/v2/p/`)

  return res.data
}

export async function getWards(provinceSn: number): Promise<string> {
  const res = await axios.get(`
  https://provinces.open-api.vn/api/v2/p/${provinceSn}?depth=2`)

  return res.data.wards
}
