const PREFIX = 'pt_'
const SALT = 'phongtro'

export const encodeId = (id: number): string => {
  const raw = `${SALT}_${id}`

  return PREFIX + btoa(raw).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

export const decodeId = (hash: string): number | null => {
  try {
    if (!hash.startsWith(PREFIX)) return null

    const base64 = hash.replace(PREFIX, '').replace(/-/g, '+').replace(/_/g, '/')

    const decoded = atob(base64)
    const [salt, id] = decoded.split('_')

    if (salt !== SALT) return null

    const num = Number(id)
    return Number.isInteger(num) ? num : null
  } catch {
    return null
  }
}
