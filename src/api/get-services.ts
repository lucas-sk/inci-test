import { http } from '@/lib/http'

export interface GetServices {
  plataformas: {
    id: string
    name: string
    url: string
    imageUrl: string
  }[]
}

export async function getServices() {
  const response = await http.get<GetServices>('/plataformas')

  return response.data
}
