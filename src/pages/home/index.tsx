import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import inciLogo from '@/assets/inci.svg'
import listAvatarImg from '@/assets/list-avatar.png'
import listPeoplePhoto from '@/assets/list-people.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Home() {
  return (
    <>
      <Helmet title="Início" />
      <div className="mx-auto min-h-screen max-w-screen-xl font-sans antialiased">
        <div className="absolute -right-16 -top-28 h-1/2 w-1/2 rounded-xl bg-blue-600" />

        <header className="relative flex py-7">
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
        <main className="relative mt-9 flex justify-between gap-32">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl text-[#091C7A]">
                Preparando Pessoas{' '}
                <span className="font-bold">para o Futuro</span>
              </h1>
              <p className="text-2xl text-slate-700">
                Soluções educacionais para a formação e desenvolvimento de
                pessoas e instituições.
              </p>
              <form className="flex gap-2">
                <Input type="text" placeholder="seuemail@gmail.com" />
                <Button className="bg-[#091C7A]">Entrar em Contato</Button>
              </form>
            </div>
            <div className="flex gap-2">
              <img src={listAvatarImg} alt="" />
              <div>
                <p className="font-bold text-[#0C228F]">+11,8 mi 😯🤯</p>
                <p className="text-[#2F50EE]">de Alcance</p>
              </div>
            </div>
          </div>
          <img src={listPeoplePhoto} alt="" />
        </main>
      </div>
    </>
  )
}
