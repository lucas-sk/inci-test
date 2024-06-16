import { useQuery } from '@tanstack/react-query'

import { getServices } from '@/api/get-services'
import { getTools } from '@/api/get-tools'
import { ItemHub } from '@/components/itemHub'

export function Hub() {
  const { data: tools } = useQuery({
    queryKey: ['tools'],
    queryFn: () => getTools(),
  })

  const { data: services } = useQuery({
    queryKey: ['services'],
    queryFn: () => getServices(),
  })

  return (
    <div className="w-full space-y-12">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium text-[#091C7A]">
            Nossas Plataformas
          </h2>
          <p className="text-[#ABACAD]">Escolha o icone para entrar</p>
        </div>
        <div className="grid auto-rows-[250px] grid-cols-4 gap-x-4 gap-y-2">
          {services?.plataformas?.map((service) => (
            <div key={service.id} className="items-center">
              <ItemHub
                name={service.name}
                imageUrl={service.imageUrl}
                url={service.url}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium text-[#091C7A]">
            Principais ferramentas
          </h2>
          <p className="text-sm text-[#ABACAD]">Escolha o icone para entrar</p>
        </div>
        <div className="grid auto-rows-[250px] grid-cols-4 gap-x-4 gap-y-2">
          {tools?.ferramentas?.map((tool) => (
            <ItemHub
              name={tool.name}
              key={tool.id}
              imageUrl={tool.imageUrl}
              url={tool.url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
