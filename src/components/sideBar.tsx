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
              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500 hover:bg-blue-900 hover:text-white">
                <HomeIcon />
                Início
              </Button>
              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500 hover:bg-blue-900 hover:text-white">
                <UsersIcon />
                Alunos
              </Button>

              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500 hover:bg-blue-900 hover:text-white">
                <CircleDollarSignIcon />
                Pagamentos
              </Button>
              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500 hover:bg-blue-900 hover:text-white">
                <CoursesIcon />
                Cursos
              </Button>
              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500 hover:bg-blue-900 hover:text-white">
                <MessageCircleQuestionIcon />
                Central de Ajuda
              </Button>
              <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500 hover:bg-blue-900 hover:text-white">
                <AwardIcon />
                Certificado impresso
              </Button>
            </div>
            <div className="space-y-4">
              <p>Ferramentas</p>
              <div className="flex flex-col gap-2">
                <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500 hover:bg-blue-900 hover:text-white">
                  <LadderIcon />
                  Recursos
                </Button>
                <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500 hover:bg-blue-900 hover:text-white">
                  <AnalyticsIcon />
                  Analytics
                </Button>
                <Button className="justify-start gap-2 bg-transparent px-2 text-gray-500 hover:bg-blue-900 hover:text-white">
                  <MegaphoneIcon />
                  Whats Push
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="justify-start gap-2 bg-transparent px-2 text-[#8B98D1] hover:bg-[#8b98d1d0] hover:text-white">
                <SettingsIcon />
                Configuração
              </Button>
              <Button
                variant={'destructive'}
                className="justify-start gap-2 bg-transparent px-2 text-destructive hover:text-destructive-foreground"
              >
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
              <Button
                size={'icon'}
                className="bg-transparent text-gray-500 hover:bg-blue-900 hover:text-white"
              >
                <HomeIcon />
              </Button>
              <Button
                size={'icon'}
                className="bg-transparent text-gray-500 hover:bg-blue-900 hover:text-white"
              >
                <UsersIcon />
              </Button>

              <Button
                size={'icon'}
                className="bg-transparent text-gray-500 hover:bg-blue-900 hover:text-white"
              >
                <CircleDollarSignIcon />
              </Button>
              <Button
                size={'icon'}
                className="bg-transparent text-gray-500 hover:bg-blue-900 hover:text-white"
              >
                <CoursesIcon />
              </Button>
              <Button
                size={'icon'}
                className="bg-transparent text-gray-500 hover:bg-blue-900 hover:text-white"
              >
                <MessageCircleQuestionIcon />
              </Button>
              <Button
                size={'icon'}
                className="bg-transparent text-gray-500 hover:bg-blue-900 hover:text-white"
              >
                <AwardIcon />
              </Button>
            </div>
            <div className="space-y-4">
              <p>Fe...</p>
              <div className="space-y-2">
                <Button
                  size={'icon'}
                  className="bg-transparent text-gray-500 hover:bg-blue-900 hover:text-white"
                >
                  <LadderIcon />
                </Button>
                <Button
                  size={'icon'}
                  className="bg-transparent text-gray-500 hover:bg-blue-900 hover:text-white"
                >
                  <AnalyticsIcon />
                </Button>
                <Button
                  size={'icon'}
                  className="bg-transparent text-gray-500 hover:bg-blue-900 hover:text-white"
                >
                  <MegaphoneIcon />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Button
                size={'icon'}
                className="bg-transparent text-[#8B98D1] hover:bg-[#8b98d1d0] hover:text-white"
              >
                <SettingsIcon />
              </Button>
              <Button
                size={'icon'}
                className="bg-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground"
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
