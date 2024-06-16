import {
  ArrowLeftIcon,
  ArrowRightIcon,
  AwardIcon,
  CircleDollarSignIcon,
  HomeIcon,
  MegaphoneIcon,
  MessageCircleQuestionIcon,
  PowerIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react'
import { useState } from 'react'

import { AnalyticsIcon } from './icons/analyticsIcon'
import { CoursesIcon } from './icons/coursesIcon'
import { LadderIcon } from './icons/ladderIcon'
import { Button } from './ui/button'

export function SideBar() {
  const [shouldShowSideBar, setShouldShowSideBar] = useState(false)

  function handleCloseSidebar() {
    setShouldShowSideBar(() => false)
  }

  function handleOpenSidebar() {
    setShouldShowSideBar(() => true)
  }

  return (
    <div
      className={`"relative pt-4" p-6 ${shouldShowSideBar ? 'w-56' : 'w-24'} p-6`}
    >
      {!!shouldShowSideBar && (
        <>
          <Button
            size={'icon'}
            onClick={handleCloseSidebar}
            className="absolute left-[12.5rem] top-2 rounded-full border-[#8B98D1] bg-white text-[#8B98D1] hover:bg-[#8B98D1] hover:text-white"
          >
            <ArrowLeftIcon size={16} />
          </Button>
          <div className="space-y-12">
            <div className="flex flex-col gap-2">
              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500">
                <HomeIcon />
                Início
              </Button>
              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500">
                <UsersIcon />
                Alunos
              </Button>

              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500">
                <CircleDollarSignIcon />
                Pagamentos
              </Button>
              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500">
                <CoursesIcon />
                Cursos
              </Button>
              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500">
                <MessageCircleQuestionIcon />
                Central de Ajuda
              </Button>
              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500">
                <AwardIcon />
                Certificado impresso
              </Button>
            </div>
            <div className="space-y-4">
              <p>Ferramentas</p>
              <div className="flex flex-col gap-2">
                <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500">
                  <LadderIcon />
                  Recursos
                </Button>
                <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500">
                  <AnalyticsIcon />
                  Analytics
                </Button>
                <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500">
                  <MegaphoneIcon />
                  Whats Push
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="justify-start gap-2 bg-transparent px-2 text-[#8B98D1]">
                <SettingsIcon />
                Configuração
              </Button>
              <Button className="justify-start gap-2 bg-transparent px-2 text-destructive">
                <PowerIcon />
                Sair
              </Button>
            </div>
          </div>
        </>
      )}

      {!shouldShowSideBar && (
        <>
          <Button
            size={'icon'}
            onClick={handleOpenSidebar}
            className="absolute left-[4.75rem] top-2 rounded-full border-[#8B98D1] bg-white text-[#8B98D1] hover:bg-[#8B98D1] hover:text-white"
          >
            <ArrowRightIcon size={16} />
          </Button>
          <div className="space-y-12">
            <div className="space-y-2">
              <Button size={'icon'} className="bg-transparent text-gray-500">
                <HomeIcon />
              </Button>
              <Button size={'icon'} className="bg-transparent text-gray-500">
                <UsersIcon />
              </Button>

              <Button size={'icon'} className="bg-transparent text-gray-500">
                <CircleDollarSignIcon />
              </Button>
              <Button size={'icon'} className="bg-transparent text-gray-500">
                <CoursesIcon />
              </Button>
              <Button size={'icon'} className="bg-transparent text-gray-500">
                <MessageCircleQuestionIcon />
              </Button>
              <Button size={'icon'} className="bg-transparent text-gray-500">
                <AwardIcon />
              </Button>
            </div>
            <div className="space-y-4">
              <p>Fe...</p>
              <div className="space-y-2">
                <Button size={'icon'} className="bg-transparent text-gray-500">
                  <LadderIcon />
                </Button>
                <Button size={'icon'} className="bg-transparent text-gray-500">
                  <AnalyticsIcon />
                </Button>
                <Button size={'icon'} className="bg-transparent text-gray-500">
                  <MegaphoneIcon />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Button size={'icon'} className="bg-transparent text-[#8B98D1]">
                <SettingsIcon />
              </Button>
              <Button
                size={'icon'}
                className="bg-transparent text-destructive hover:bg-transparent hover:text-destructive/90"
              >
                <PowerIcon />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
