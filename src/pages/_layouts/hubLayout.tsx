import { CircleDollarSign, Search, Users } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

import avatar from '@/assets/Avatar.svg'
import inciLogo from '@/assets/inci-logo-dark.svg'
import { AnalyticsIcon } from '@/components/icons/analyticsIcon'
import { CoursesIcon } from '@/components/icons/coursesIcon'
import { SideBar } from '@/components/sideBar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function HubLayout() {
  return (
    <div className="min-h-screen w-screen font-sans antialiased">
      <header className="bg-[#091C7A] px-12 py-6 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex w-full gap-12">
            <img src={inciLogo} alt="" />
            <div className="flex flex-col gap-2">
              <p>Suas funções utilizadas:</p>
              <div className="flex gap-6">
                <Link className="flex gap-1" to={'/analytics'}>
                  <AnalyticsIcon />
                  Analytics
                </Link>
                <Link className="flex gap-1" to={'/cursos'}>
                  <CoursesIcon />
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
                className="flex w-[300px] items-center gap-2 rounded-sm bg-white px-4 py-2"
                htmlFor=""
              >
                <Search />
                <Input
                  type="text"
                  className="focus-visible:ring-none h-auto bg-transparent p-0 text-slate-900 placeholder:text-slate-400"
                  placeholder="Pesquisar"
                />
              </Label>
            </form>
            <img src={avatar} alt="" className="rounded-full" />
          </div>
        </div>
      </header>
      <main className="flex">
        <div className="absolute">
          <SideBar />
        </div>
        <main className="relative mx-auto flex max-w-7xl flex-1 pt-4">
          <Outlet />
        </main>
      </main>
    </div>
  )
}
