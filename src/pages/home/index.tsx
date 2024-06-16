import { Link } from 'react-router-dom'

import alcanceImg from '@/assets/alcance-img.png'
import inciLogo from '@/assets/inci.svg'
import listPeoplePhoto from '@/assets/list-people.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl space-y-9">
      <header className="flex py-7">
        <div className="flex gap-6">
          <img src={inciLogo} alt="" />
          <div className="flex gap-4">
            <Button
              variant={'link'}
              className="text-lg text-slate-500 hover:text-slate-900 hover:no-underline"
            >
              <Link to={'/'}>Nossos Serviços?</Link>
            </Button>
            <Button
              variant={'link'}
              className="text-lg text-slate-500 hover:text-slate-900 hover:no-underline"
            >
              <Link to={'/'}>Quem Somos?</Link>
            </Button>
            <Button
              variant={'link'}
              className="text-lg text-slate-500 hover:text-slate-900 hover:no-underline"
            >
              <Link to={'/'}>Nosso Time</Link>
            </Button>
          </div>
        </div>
        <div className="ml-auto flex gap-9">
          <Button className="bg-[#091C7A] text-white hover:bg-[#3b5aa7]">
            Trabalhe conosco
          </Button>
          <Button className="bg-[#FFCD85] text-slate-700 hover:bg-amber-400 hover:text-slate-200">
            <Link to={'/login'}>Entrar</Link>
          </Button>
        </div>
      </header>
      <main className="flex justify-between gap-32">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-4">
            <h1 className="text-7xl text-[#091C7A]">
              Preparando Pessoas{' '}
              <span className="font-bold">para o Futuro</span>
            </h1>
            <p className="text-slate-700">
              Soluções educacionais para a formação e desenvolvimento de pessoas
              e instituições
            </p>
            <form className="flex gap-2">
              <Input type="text" placeholder="seuemail@gmail.com" />
              <Button className="bg-[#091C7A]">Entrar em Contato</Button>
            </form>
          </div>
          <img src={alcanceImg} alt="" />
        </div>
        <img src={listPeoplePhoto} alt="" />
      </main>
    </div>
  )
}
