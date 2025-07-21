const baseUrl = process.env.NEXT_PUBLIC_API_URL

export function get<T>(
  url: string,
  params?: Record<string, string>
): Promise<T> {
  const paramsString = params
    ? `?${new URLSearchParams(params).toString()}`
    : ''
  console.log('baseUrl', baseUrl, paramsString)
  return fetch(`${baseUrl}${url}${paramsString || ''}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.code === 200 || res.code === 201) {
        return res.data
      } else {
        throw new Error(res.message)
      }
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export function post<T>(url: string, data: Record<string, any>): Promise<T> {
  return fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.code == 200 || res.code == 201) {
        return res.data
      } else {
        throw new Error(res.message)
      }
    })
    .catch((err) => {
      console.error(err)
      return null
    })
}
