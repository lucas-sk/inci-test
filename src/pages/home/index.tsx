import alcanceImg from '@/assets/alcance-img.png'
import inciLogo from '@/assets/inci.svg'
import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <div className="min-h-screen space-y-9 w-screen">
      <header className="py-7 mx-auto px-28 justify-between flex">
        <div className="flex gap-6">
          <img src={inciLogo} alt="" />
          <div className="flex gap-4">
            <a href="">Nossos Serviços?</a>
            <a href="">Quem Somos?</a>
            <a href="">Nosso Time</a>
          </div>
        </div>
        <div className="flex gap-9">
          <Button className="bg-[#091C7A] text-white">Trabalhe conosco</Button>
          <Button className="bg-[#FFCD85] text-slate-700">Entrar</Button>
        </div>
      </header>
      <main className="">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-[#091C7A] text-[56px]">
              Preparando Pessoas{' '}
              <span className="font-bold">para o Futuro</span>
            </h1>
            <p className="text-slate-700">
              Soluções educacionais para a formação e desenvolvimento de pessoas
              e instituições
            </p>
            <form className="flex gap-2">
              <input type="text" placeholder="seuemail@gmail.com" />
              <Button className="bg-[#091C7A]">Entrar em Contato</Button>
            </form>
          </div>
          <img src={alcanceImg} alt="" />
        </div>
      </main>
    </div>
  )
}
