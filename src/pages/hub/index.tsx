import { useQuery } from '@tanstack/react-query'
import {
  AppWindow,
  BarChart3,
  CircleDollarSign,
  Search,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { getServices } from '@/api/get-services'
import { getTools } from '@/api/get-tools'
import avatar from '@/assets/Avatar.svg'
import inciLogo from '@/assets/inci-logo-dark.svg'
import { ItemHub } from '@/components/itemHub'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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
    <div className="min-h-screen w-screen space-y-4 ">
      <header className="bg-[#091C7A] text-white py-6 px-12 ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-12">
            <img src={inciLogo} alt="" />
            <div className="flex flex-col gap-2">
              <p>Suas funções utilizadas:</p>
              <div className="flex gap-6">
                <Link className="flex gap-1" to={'/analytics'}>
                  <BarChart3 />
                  Analytics
                </Link>
                <Link className="flex gap-1" to={'/cursos'}>
                  <AppWindow />
                  Cursos
                </Link>
                <Link className="flex gap-1" to={'/alunos'}>
                  <Users />
                  Alunos
                </Link>
                <Link className="flex gap-1" to={'/pagamentos'}>
                  <CircleDollarSign />
                  Pagamentos
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <form action="">
              <Label
                className="flex py-2 px-4 bg-white w-[300px] items-center gap-2 rounded-sm"
                htmlFor=""
              >
                <Search />
                <Input
                  type="text"
                  className="bg-transparent p-0 placeholder:text-slate-400 text-slate-900 h-auto focus-visible:ring-none"
                  placeholder="Pesquisar"
                />
              </Label>
            </form>
            <img src={avatar} alt="" className="rounded-full" />
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto">
        <div>
          <div>
            <div className="space-y-2">
              <h2 className="text-[#091C7A] font-medium text-2xl">
                Nossas Plataformas
              </h2>
              <p className="text-[#ABACAD]">Escolha o icone para entrar</p>
            </div>
            <div className="flex gap-4">
              {services?.plataformas?.map((service) => (
                <ItemHub
                  name={service.name}
                  key={service.id}
                  imageUrl={service.imageUrl}
                  url={service.url}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <h2 className="text-[#091C7A] font-medium text-2xl">
                Principais ferramentas
              </h2>
              <p className="text-[#ABACAD] text-sm">
                Escolha o icone para entrar
              </p>
            </div>
            <div className="flex gap-4">
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
      </main>
    </div>
  )
}
