import { http } from '@/lib/http'

export interface GetTools {
  ferramentas: {
    id: string
    name: string
    url: string
    imageUrl: string
  }[]
}

export async function getTools() {
  const response = await http.get<GetTools>('/ferramentas')

  return response.data
}
