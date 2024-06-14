import avatar from '@/assets/Avatar.svg'
import inciLogo from '@/assets/inci-logo-dark.svg'
import { ItemHub } from '@/components/itemHub'
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-react'

export function Hub() {
  return (
    <div className="min-h-screen w-screen space-y-4">
      <header className="bg-[#091C7A] py-6 px-12 flex justify-between items-center">
        <div className="flex gap-12">
          <img src={inciLogo} alt="" />
          <div>
            <p>Suas funções utilizadas:</p>
            <div className="flex gap-6">
              <div>analytics</div>
              <div>cursos</div>
              <div>alunos</div>
              <div>pagamentos</div>
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
              <input type="text  bg-transparent" />
            </Label>
          </form>
          <img src={avatar} alt="" className="rounded-full" />
        </div>
      </header>
      <main className="flex gap-[72px]">
        <div></div>
        <div>
          <div>
            <div className="space-y-2">
              <h1 className="text-[#091C7A] font-medium">Nossas Plataformas</h1>
              <p className="text-[#ABACAD] text-sm">
                Escolha o icone para entrar
              </p>
            </div>
            <div className="flex gap-4">
              <ItemHub />
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <h1 className="text-[#091C7A] font-medium">
                Principais ferramentas
              </h1>
              <p className="text-[#ABACAD] text-sm">
                Escolha o icone para entrar
              </p>
            </div>
            <div className="flex gap-4">
              <ItemHub />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
